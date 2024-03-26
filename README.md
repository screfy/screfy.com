# screfy.com

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org) v20
- Package Manager (this project is using [pnpm](https://pnpm.io))

### Setting Up a Project

1. [Clone](https://help.github.com/en/articles/cloning-a-repository) this repository:

   ```bash
   $ git clone https://github.com/screfy/screfy.com.git
   ```

2. Install dependencies:

   ```bash
   $ pnpm install
   ```

3. Create a [`.env.local`](https://nextjs.org/docs/basic-features/environment-variables) file similar to [`.env.example`](.env.example).

4. Start the development server:

   ```bash
   $ pnpm dev
   ```

5. Open development site: [`http://localhost:3000`](http://localhost:3000).

## Deployment

This project is deployed on [Vercel](https://vercel.com).
