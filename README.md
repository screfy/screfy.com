# screfy.com

## Development Setup

### Prerequisites

- [Node.js][node]
- Package Manager (this project is using [pnpm][pnpm])

### Setting Up a Project

1. [Clone][cloning-a-repo] this repository:

   ```bash
   git clone https://github.com/screfy/screfy.com.git
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a [`.env.local`][environment-variables] file similar to [`.env.example`](.env.example).

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Open development site: [`http://localhost:3000`](http://localhost:3000).

## Deployment

This project is deployed on [Vercel][vercel].

## Continuous Integration

I use [GitHub Actions][gh-actions] for Continuous Integration. Check out my [Workflows][workflows].

## License

This project is licensed under the [MIT license](LICENSE).

[node]: https://nodejs.org
[pnpm]: https://pnpm.io
[cloning-a-repo]: https://help.github.com/en/articles/cloning-a-repository
[environment-variables]: https://nextjs.org/docs/basic-features/environment-variables
[vercel]: https://vercel.com
[gh-actions]: https://github.com/features/actions
[workflows]: https://github.com/screfy/screfy.com/actions
