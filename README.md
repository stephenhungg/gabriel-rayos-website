# Gabriel Rayos - Portfolio Website

A modern, elegant portfolio website built with React, TypeScript, Vite, and shadcn/ui.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** for beautiful, accessible components
- **Framer Motion** for smooth animations
- **React Router** for navigation

## Design

- **Color Scheme**: Black background with white text and deep royal blue (#0047AB) accents
- **Typography**: Inter for headers, Krub for body text (loaded from Google Fonts)
- **Navigation**: Animated hamburger menu with smooth transitions
- **Animations**: Spring physics and custom cubic-bezier curves for fluid, non-linear motion

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   └── Layout.tsx       # Main layout with hamburger menu
├── pages/
│   ├── Home.tsx         # Landing page with animations
│   ├── Projects.tsx     # Projects showcase
│   ├── BerkeleyFormula.tsx  # Berkeley Formula Racing page
│   ├── Research.tsx     # Research and publications
│   └── Gallery.tsx      # Photo gallery
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main app component with routing
├── main.tsx             # Entry point
└── index.css            # Global styles and theme
```

## Pages

- **Home** - Landing page with abstract geometric intro animation (25 shapes with spring physics) transitioning to elegant text reveal with non-linear easing
- **Projects** - Grid of engineering projects with animated cards, spring-based hover effects, and staggered entrance
- **Berkeley Formula** - Dedicated page for Berkeley Formula Racing involvement
- **Research** - Academic research and publications
- **Gallery** - Visual showcase with diagonal line transitions and spring-based hover interactions

## Customization

### Adding Content

Replace the placeholder content in each page component:
- `src/pages/Projects.tsx` - Add your project details
- `src/pages/BerkeleyFormula.tsx` - Add team contributions
- `src/pages/Research.tsx` - Add research projects and publications
- `src/pages/Gallery.tsx` - Add images and descriptions

### Modifying Theme

Edit `src/index.css` to change color variables under `:root`:
- Background, foreground, and accent colors
- Border and card styling
- Primary color (currently deep royal blue #0047AB)

To change fonts, edit the Google Fonts link in `index.html` and update `tailwind.config.js`

### Adding More Components

Use shadcn/ui CLI to add more components:
```bash
npx shadcn@latest add [component-name]
```

## Deployment

Build the project and deploy the `dist` folder to any static hosting service:

```bash
npm run build
```

Recommended hosting platforms:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## License

Personal portfolio project for Gabriel Rayos.
