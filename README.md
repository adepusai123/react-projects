# Ecom MFE Monorepo Setup

This monorepo uses Turborepo, Vite, React, and Module Federation to build a scalable micro-frontend architecture.

## Folder Structure
- `packages/core`: Shared resources (e.g., tanstack query, context)
- `packages/products`: Federated module for product listing
- `packages/application`: Host application for all modules

## Step-by-Step Setup

### 1. Initialize Turborepo
- Run `npx create-turbo@latest .` in the `ecom-mfe` root.
- Choose your preferred package manager (e.g., pnpm).

### 2. Create Packages
- Create `core`, `products`, and `application` folders under `packages`.

### 3. Scaffold Each Module
- Each module is a Vite React TypeScript app with its own `vite.config.ts`.
- Install dependencies:
  ```bash
  pnpm install vite @vitejs/plugin-react @originjs/vite-plugin-federation @tanstack/react-query react --filter "./packages/*"
  ```

### 4. Configure Module Federation
- `application` is the host and loads remotes from `products` and `core`.
- `core` exposes shared resources.
- `products` exposes product list component.

### 5. Build and Run All Modules
- Use Turborepo commands:
  ```bash
  pnpm run build    # Build all apps and packages
  pnpm run dev      # Develop all apps and packages
  pnpm run lint     # Lint all apps and packages
  ```

### 6. Add More Modules
- Add new folders under `packages` and configure their own `vite.config.ts` for federation.

### 7. Useful Links
- [Turborepo Docs](https://turborepo.com/docs)
- [Vite Docs](https://vitejs.dev/)
- [Module Federation Plugin](https://github.com/originjs/vite-plugin-federation)

---

**This README will be updated as you add more modules and features.**

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build
yarn dlx turbo build
pnpm exec turbo build
```

You can build a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build --filter=docs

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build --filter=docs
yarn exec turbo build --filter=docs
pnpm exec turbo build --filter=docs
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev
yarn exec turbo dev
pnpm exec turbo dev
```

You can develop a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev --filter=web

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev --filter=web
yarn exec turbo dev --filter=web
pnpm exec turbo dev --filter=web
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo login

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo login
yarn exec turbo login
pnpm exec turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo link

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo link
yarn exec turbo link
pnpm exec turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
