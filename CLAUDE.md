# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application serving as a portfolio website for Will Platnick, a Certified Grief Recovery Specialist. The site is built with React 19, TypeScript, and uses shadcn/ui components with Tailwind CSS v4.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15.2.4 with App Router
- **UI Components**: shadcn/ui (New York style) with Radix UI primitives
- **Styling**: Tailwind CSS v4 with CSS variables
- **Typography**: Geist Sans and Geist Mono fonts
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

### Project Structure
- `/app` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with metadata
  - `page.tsx` - Single-page portfolio application
  - `globals.css` - Global styles and Tailwind imports
- `/components` - React components
  - `/ui` - shadcn/ui components (Button, Card, Badge, etc.)
  - `theme-provider.tsx` - Next-themes provider
- `/lib` - Utilities and helpers
- `/public` - Static assets (images, PDFs)

### Key Features
- Single-page portfolio with sections: Hero, About, Evidence, Services, Resources, Contact
- Evidence-based program statistics display
- Integrated scheduling via Fantastical
- Free resource download (PDF)
- Faith-based options available
- Responsive design with mobile support

## Development Notes

### Build Configuration
- ESLint errors are ignored during builds (`ignoreDuringBuilds: true`)
- TypeScript errors are ignored during builds (`ignoreBuildErrors: true`)
- Images are unoptimized (`unoptimized: true`)

### Path Aliases
- `@/*` maps to the project root
- Use `@/components/ui` for UI components
- Use `@/lib` for utilities

### Component Guidelines
- All new UI components should use shadcn/ui components from `/components/ui`
- Follow the existing New York style configuration
- Components should be placed in `/components` with subdirectories by use case
- Prefer Lucide React for icons

## Contact Information
- Email: will@willplatnick.com
- Scheduling: https://fantastical.app/wplatnick-dLno/30