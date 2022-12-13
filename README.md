# [`pauljs.io`](https://pauljs.io)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The theme is inspired by [this](https://vercel.com/templates/next.js/nextjs-portfolio) Vercel NextJS template. 

## Quick Start

Ensure `node` and `npm` are installed first:

```bash
npm install
npm run dev # runs dev server on localhost:3000
```

## Overview

This project is built and deployed to my [`gke`](https://github.com/paulsilcock/gke-terraform) cluster. 

### Deployments

This repo uses `commitlint` to enforce conventional commits - `husky` will automatically install `git` hooks upon `npm install`. To trigger a new release, the commit must be one of `fix:` or `feat:`. `@semantic-release` will increment the version and tag the repo as appropriate.


On successful release, [`staging`](https://github.com/paulsilcock/app-of-apps/blob/main/apps/homepage/overlays/staging/kustomization.yaml#L8) is automatically updated - the ArgoCD controller will deploy the new version.

To update `production`, update the `newTag` field manually.



### Structure

* `pages/*` - static pages (e.g. `index.tsx` corresponds `pauljs.io/`)
* `components/*` - reusable components
* `public/*` - static assets such as images and fonts
* `stories/*` - storybook component stories
* `Dockerfile` - image built and deployed [here](https://github.com/paulsilcock/app-of-apps/tree/main/apps/homepage) 

### Storybook

[Storybook](https://storybook.js.org/) is included, and [will be used](https://github.com/paulsilcock/homepage/issues/13) to build/test components in isolation. Run `npm run storybook` to view the storybook dev server @ `localhost:6006`. 

