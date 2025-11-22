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

## Technologies Used

This project is built with:

- **Vite** - Build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn/ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework

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
