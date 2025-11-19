import { useEffect, useRef } from 'react'

const fragmentShader = `
precision highp float;

uniform vec2 iResolution;
uniform float iTime;

// Global variables for the raymarcher
mat2 R;
float d = 1.;
float z = 0.;
float G = 9.;
float M = 0.001;

// Distance function
float D(vec3 p) {
  // Rotation
  p.xy *= R;
  p.xz *= R;

  // Surface pattern
  vec3 S = sin(123.0 * p);

  // Glow calculation
  // L8 norm superquadric: (x^8 + y^8 + z^8)^(1/8)
  // We calculate p^4 first, then dot(p,p) gives sum of (coord^4)^2 = coord^8
  vec3 p4 = p * p * p * p; 
  
  // Calculate intro progress (0 to 1 over 3.5 seconds)
  float intro = smoothstep(0.0, 3.5, iTime);

  // Main object distance
  // Start as sphere (L2), morph to cube (L8)
  float d_sphere = length(p) - 0.5;
  float d_cube = pow(dot(p4, p4), 0.125) - 0.5;
  
  // Mix shapes based on intro
  // We also make it start slightly smaller (0.1) and grow to full size (0.5)
  // float d_obj = mix(d_sphere + 0.4, d_cube, intro);
  // Let's keep size constant but morph shape
  float d_obj = mix(d_sphere, d_cube, intro);
  
  // Add surface detail - fade it in
  d_obj -= (pow(1.0 + S.x * S.y * S.z, 8.0) / 100000.0) * intro;
  
  d = d_obj;

  // Update Glow
  // Pulse glow at start
  float pulse = 0.6 + 0.1 * sin(iTime * 5.0);
  float glowDist = mix(pulse, 0.6, intro);
  G = min(G, max(abs(length(p) - glowDist), d));

  return d;
}

void mainImage(out vec4 o, vec2 C) {
  vec3 p;
  vec3 O = vec3(0.0);
  vec3 r_vec = vec3(iResolution.xy, 0.0); // Temporary use of resolution
  vec3 I = normalize(vec3(C - 0.5 * iResolution.xy, iResolution.y));
  vec3 B = vec3(1.0, 2.0, 9.0) * M;

  // Initialize globals for this pixel
  vec4 rotParams = 0.3 * iTime + vec4(0.0, 11.0, 33.0, 0.0);
  vec4 cosRot = cos(rotParams);
  // Construct rotation matrix safely (col-major)
  R = mat2(cosRot.x, cosRot.y, cosRot.z, cosRot.w);
  
  d = 1.0;
  z = 0.0;
  G = 9.0;

  // Raymarching
  bool hit = false;
  
  float intro = smoothstep(0.0, 3.5, iTime);
  
  for (int i = 0; i < 99; i++) {
      if (z >= 9.0 || d <= M) break;
      
      // Calculate current position
      p = z * I;
      
      // Animation: Zoom out from center
      // Start very close (camera effectively inside/near object), move back to -2.0
      // p.z -= 2.0 is normal state (camera at -2)
      // p.z -= 0.5 would be camera at -0.5
      p.z -= mix(0.5, 2.0, intro);
      
      float dist = D(p);
      z += dist;
      
      if (d <= M) hit = true;
  }

  if (z < 9.0) {
    // Normal calculation
    vec3 n = vec3(0.0);
    // Finite difference method
    vec3 e = vec3(M, 0.0, 0.0);
    n.x = D(p + e.xyy) - D(p - e.xyy);
    n.y = D(p + e.yxy) - D(p - e.yxy);
    n.z = D(p + e.yyx) - D(p - e.yyx);
    O = normalize(n);

    // Lighting
    z = 1.0 + dot(O, I); // Fresnel approximation
    
    vec3 ref = reflect(I, O);
    
    // Background reflection
    vec2 bgC;
    if (ref.y > 0.0) {
         bgC = (p + ref * (5.0 - p.y) / abs(ref.y)).xz;
    } else {
         bgC = (p + ref * (5.0 - p.y) / abs(ref.y)).xz; // Logic in original was conditional c calc
         // Actually original: C = (p+r*(5.-p.y)/abs(r.y)).xz;
         // It's the same formula, just checking direction for color choice
    }
    // Original: C = (p+r*(5.-p.y)/abs(r.y)).xz;
    bgC = (p + ref * (5.0 - p.y) / abs(ref.y)).xz;

    vec3 colorPart;
    if (ref.y > 0.0) {
         d = sqrt(length(bgC * bgC)) + 1.0;
         colorPart = 500.0 * smoothstep(5.0, 4.0, d) * d * B;
    } else {
         colorPart = exp(-2.0 * length(bgC)) * (B / M - 1.0);
    }
    
    O = z * z * colorPart + pow(1.0 + O.y, 5.0) * B;
  } else {
     // Background if no hit (optional, black or fade)
     O = vec3(0.0); 
     // Original code didn't clear O if miss, but O initialized to 0.
  }

  // Tone mapping
  o = vec4(sqrt(O + B / G), 1.0);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

const vertexShader = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl')
    if (!gl) return

    // Create shaders
    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vert = createShader(gl.VERTEX_SHADER, vertexShader)
    const frag = createShader(gl.FRAGMENT_SHADER, fragmentShader)
    if (!vert || !frag) return

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vert)
    gl.attachShader(program, frag)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program))
      return
    }

    gl.useProgram(program)

    // Set up geometry (full screen quad)
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    )

    const positionLocation = gl.getAttribLocation(program, 'position')
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    // Uniforms
    const timeLocation = gl.getUniformLocation(program, 'iTime')
    const resolutionLocation = gl.getUniformLocation(program, 'iResolution')

    let animationFrameId: number
    const startTime = Date.now()

    const render = () => {
      const time = (Date.now() - startTime) / 1000
      
      // Update resolution if canvas resized
      const pixelRatio = window.devicePixelRatio || 1
      const displayWidth = Math.floor(canvas.clientWidth * pixelRatio)
      const displayHeight = Math.floor(canvas.clientHeight * pixelRatio)

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth
        canvas.height = displayHeight
        gl.viewport(0, 0, canvas.width, canvas.height)
      }

      gl.uniform1f(timeLocation, time)
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)

      gl.drawArrays(gl.TRIANGLES, 0, 6)
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      gl.deleteProgram(program)
      gl.deleteShader(vert)
      gl.deleteShader(frag)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: '#000' }}
    />
  )
}
