# Luminous Path Engine

A modern, responsive web application built with cutting-edge technologies.

## Project Overview

Luminous Path Engine is a sophisticated React-based web application that provides an intuitive and engaging user experience through modern UI components and smooth animations.

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - Component-based UI library
- **shadcn/ui** - Modern component library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
```

2. Navigate to the project directory:
```sh
cd luminous-path-engine
```

3. Install dependencies:
```sh
npm install
```

4. Start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── components/     # Reusable UI components
├── lib/           # Utility functions and configurations
├── hooks/         # Custom React hooks
└── main.tsx       # Application entry point
```

## Development

This project uses modern development practices:

- **TypeScript** for type safety
- **ESLint** for code linting
- **Tailwind CSS** for styling
- **Component-based architecture** for maintainability

## Deployment

The application can be deployed to any static hosting service that supports single-page applications (SPAs):

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Build the project with `npm run build` and deploy the `dist` folder.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
