# create-vue-enhanced <a href="https://npmjs.com/package/create-vue-enhanced"><img src="https://badgen.net/npm/v/create-vue-enhanced" alt="npm package"></a> <a href="https://nodejs.org/en/about/previous-releases"><img src="https://img.shields.io/node/v/create-vue-enhanced" alt="node compatibility"></a>

The enhanced way to start a Vite-powered Vue project

This repository is a fork of [vuejs/create-vue](https://github.com/vuejs/create-vue) that adds some new options like Tailwind CSS or Commitlint to the setup.

<p align="center">
  <img width="898" alt="Screencast from terminal" src="https://github.com/vuejs/create-vue-enhanced/blob/main/media/screencast-cli.gif?raw=true">
</p>

## Usage

To create a new Vue project using `create-vue-enhanced`, simply run the following command in your terminal:

```sh
npx create-vue-enhanced@latest
```

> [!IMPORTANT]
> (`@latest` or `@legacy`) MUST NOT be omitted, otherwise `npm` may resolve to a cached and outdated version of the package.

By default, the command runs in interactive mode with prompts. You can skip these prompts by providing feature flags as CLI arguments. To see all available feature flags and options:

```sh
npx create-vue-enhanced@latest -- --help
```

This will show you various feature flags (like `--typescript`, `--router`) and options (like `--bare` for creating a project with minimal boilerplate).

**PowerShell users:** You'll need to quote the double dashes: `npm create vue enhanced@latest '--' --help`

### Creating Vue 2 Projects

If you need to support IE11, you can create a Vue 2 project with:

```sh
npx create-vue-enhanced@legacy
```

> [!WARNING]  
> [Vue 2 Has Reached End of Life](https://v2.vuejs.org/eol/)

## Difference from Vue CLI

- Vite-Powered: Vue CLI is based on webpack, while `create-vue` is based on [Vite](https://vite.dev/). Vite supports most of the configured conventions found in Vue CLI projects out of the box, and provides a significantly better development experience due to its extremely fast startup and hot-module replacement speed. Learn more about why we recommend Vite over webpack [here](https://vite.dev/guide/why.html).

- Scaffolding Tool: Unlike Vue CLI, `create-vue` itself is just a scaffolding tool. It creates a pre-configured project based on the features you choose, and delegates the rest to Vite. Projects scaffolded this way can directly leverage the [Vite plugin ecosystem](https://vite.dev/plugins/) which is Rollup-compatible.

## Migrating from Vue CLI

If you're transitioning from Vue CLI to Create Vue, we've got you covered. Here are some resources to help you with the migration:
How to Migrate from Vue CLI to Vite

- Vue CLI to Vite Migration Guide: A comprehensive guide on migrating from Vue CLI to Vite, available on [VueSchool.io](https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/)
- Tools and Plugins for Migration: For a smoother transition, check out the list of tools and plugins designed to assist with the migration process on the
  [Awesome Vite GitHub page](https://github.com/vitejs/awesome-vite#vue-cli).
