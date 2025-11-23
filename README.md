# Scholara11y

A React application built with modern web technologies.

## Getting Started

This project requires Node.js & npm to be installed. [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
```

2. Navigate to the project directory:
```sh
cd <YOUR_PROJECT_NAME>
```

3. Install the necessary dependencies:
```sh
npm install
```

4. Start the development server:
```sh
npm run dev
```

## Design System

This project uses a comprehensive design system built on Tailwind CSS and shadcn/ui for consistent user experience.

### Color System

The application uses a CSS custom properties-based color system with light and dark mode support:

- **Primary Colors**: Blue tones for interactive elements
- **Semantic Colors**: Green for success, Red for errors, Yellow for warnings
- **Neutral Colors**: Grays for text and backgrounds
- **Okabe-Ito Palette**: Colorblind-safe colors for data visualization

### Typography

- **Font Family**: System fonts for optimal performance
- **Scale**: Consistent heading hierarchy (text-5xl to text-sm)
- **Line Height**: 1.5 for body text, 1.2 for headings
- **Accessibility**: Minimum 16px font size, proper contrast ratios

### Spacing

- **Scale**: Uses Tailwind's spacing scale (space-y-12, space-y-6, etc.)
- **Consistent Layout**: 2rem container padding, responsive margins

### Components

#### Layout Components
- `Layout`: Main application layout with sidebar navigation
- `PageHeader`: Consistent page headers with title and subtitle
- `PageSection`: Reusable section wrapper with optional title

#### UI Components
- Built on shadcn/ui foundation
- Consistent button styles, form elements, cards
- Accessible by default with ARIA attributes

### Usage Guidelines

#### Colors
```css
/* Use CSS custom properties instead of hardcoded values */
.my-element {
  color: hsl(var(--foreground));
  background: hsl(var(--background));
}
```

#### Typography
```jsx
// Consistent heading hierarchy
<h1 className="text-5xl font-bold tracking-tight text-foreground">Page Title</h1>
<h2 className="text-2xl font-bold text-foreground">Section Title</h2>
<p className="text-base text-muted-foreground">Body text</p>
```

#### Spacing
```jsx
// Consistent spacing patterns
<div className="space-y-12"> {/* Major sections */}
  <div className="space-y-6"> {/* Subsections */}
    <div className="space-y-4"> {/* Content blocks */}</div>
  </div>
</div>
```

## Technologies Used

This project is built with:

- **Vite** - Build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn/ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React i18next** - Internationalization
- **React Helmet Async** - Document head management

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment:

1. Create a new GitHub repository
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Set source to "Deploy from a branch"
5. Set branch to "gh-pages" (this will be created automatically)
6. Run the deploy command:

```sh
npm run deploy
```

**Note**: If your repository name is different from "scholara11y", update the `base` path in `vite.config.ts`:

```typescript
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
```

### Custom Domain Setup

For custom domain deployment (e.g., scholara11y.com):

1. **DNS Settings**: Configure your domain's DNS records:
   - **Type**: CNAME
   - **Name**: `www` (or `@` for apex domain)
   - **Value**: `your-username.github.io`
   - **TTL**: 3600 (or default)

   Or for apex domain:
   - **Type**: A
   - **Name**: `@`
   - **Values**:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

2. **GitHub Repository Settings**:
   - Go to repository Settings → Pages
   - Set source to "Deploy from a branch"
   - Set branch to "gh-pages"
   - **Custom domain**: Enter your domain name
   - Enable "Enforce HTTPS"
