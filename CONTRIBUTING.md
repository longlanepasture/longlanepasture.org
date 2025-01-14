# Contributing

This project is open to contributions. Please read the following guidelines and the [Code of Conduct](./CODE_OF_CONDUCT.md) before contributing.

## Report an Issue

Report bugs or request features via the [Issues tab](./issues/new). Please include as much detail as possible. We will review it and respond as soon as possible.

## Knowledge Prerequisites

This project uses [Next.js](https://nextjs.org/) as a static build. Please refer to the Next.js documentation for more information.

## Prepare the environment

To get started, clone the repository and instal dependencies

```bash
npm i
```

During your work you can use the following commands:

| Command            | Description                      |
| ------------------ | -------------------------------- |
| `npm run dev`      | Start the development server     |
| `npm run build` †  | Build the static website         |
| `npm start`        | Serve the static website locally |
| `npm run format` † | Format the code.                 |

> † This process is also automated in the CI pipeline.

## Create Changes

- Refer to the [structure of this repository](#structure-of-this-repository) to add structured content.
- We don't observe any specific coding standards, but please ensure your code is readable and maintainable. Try to use best practices.
- Test your changes locally.
- Before committing, run npm run build to ensure the static build works without errors.
- If you make any style changes, please check in different rendering contexts (e.g. mobile, desktop) and different rendering conditions (e.g. light, dark mode).

## Submit a PR

- Create a new branch for your changes.
- Commit descriptive messages and submit a Pull Request (PR).
- Clearly describe your changes and ensure the PR is ready for review. Screenshots are welcome.

## Deploy Changes

The deployment process is automated. Side branches are deployed to dedicated preview environments. Once the PR is merged, the changes are deployed to the production environment.

---

## Structure of this repository

We try to use out-of-the-box Next.js features as much as possible. The structure of this repository is as follows:

- **app**: Contains the Next.js application.
- **src**: Contains the source data for some lists needed in the application.
- **dynamic**: Contains dynamically built modules. Dynamically built files are excluded from source control.
- **public**: Contains static files (some are dynamically built).
- **scripts**: Contains scripts for building the dynamic assets and scripts.

### Directories used for some automated build include:

These directories are used for automated build of modules later consumed by the application. Naming conventions are important, as they are used in the build scripts. Please adhere to the naming conventions.

- `assets/newsletters`: `llp-newsletter<NUMBER>-<MONTH>-<YEAR>.pdf`
- `assets/volunteers`: `<NAME>.jpg`
- Other `assets/*` files and directories are not structured in any specific way.

### Sitemap

Sitemap is generated automatically and includes all pages in "app" directory, as well as all PDF files under "public/assets/" directory.
