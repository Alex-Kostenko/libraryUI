# Library Ui

<p align="center">
  <a href="https://storybook.js.org/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/263385/199832481-bbbf5961-6a26-481d-8224-51258cce9b33.png">
      <img src="https://user-images.githubusercontent.com/321738/63501763-88dbf600-c4cc-11e9-96cd-94adadc2fd72.png" alt="Storybook" width="400" />
    </picture>
    
  </a>
  
</p>

<p align="center">Build bulletproof UI components faster</p>

<br/>

<p align="center">
  <a href="https://circleci.com/gh/storybookjs/storybook">
    <img src="https://circleci.com/gh/storybookjs/storybook.svg?style=shield" alt="Build Status on CircleCI" />
  </a>
  <a href="https://codecov.io/gh/storybookjs/storybook">
    <img src="https://codecov.io/gh/storybookjs/storybook/branch/main/graph/badge.svg" alt="codecov" />
  </a>
  <br/>
  <a href="https://discord.gg/storybook">
    <img src="https://img.shields.io/badge/discord-join-7289DA.svg?logo=discord&longCache=true&style=flat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=storybookjs">
    <img src="https://img.shields.io/twitter/follow/storybookjs?color=blue&logo=twitter" alt="Official Twitter Handle" />
  </a>

</p>

<p align="center">
Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. Find out more at https://storybook.js.org!
</p>

<center>
  <img src="https://raw.githubusercontent.com/storybookjs/storybook/main/media/storybook-intro.gif" width="100%" />
</center>

<p align="center">
  View README for:<br/>
  <a href="https://github.com/storybookjs/storybook/blob/main/README.md" title="latest"><img alt="latest" src="https://img.shields.io/npm/v/@storybook/react/latest?style=for-the-badge&logo=storybook&logoColor=ffffff&color=66BF3C" /></a>
  <a href="https://github.com/storybookjs/storybook/blob/next/README.md" title="next"><img alt="next" src="https://img.shields.io/npm/v/@storybook/react/next?style=for-the-badge&logo=storybook&logoColor=ffffff&color=1EA7FD" /></a>
  <a href="https://github.com/storybookjs/storybook/blob/future/base/README.md" title="future"><img alt="future" src="https://img.shields.io/npm/v/@storybook/react/future?style=for-the-badge&logo=storybook&logoColor=ffffff&color=FF4785" /></a>
</p>

## Table of contents

- 🚀 [Getting Started](#getting-started)
- 📒 [Projects](#projects)
  - 🔗[Addons](#addons)
- 🏅 [Badges & Presentation materials](#badges--presentation-materials)
- 👨‍💻 [Development scripts](#development-scripts)

## Getting Started

Visit [Storybook's website](https://storybook.js.org) to learn more about Storybook and to get started.

### Documentation

Documentation can be found on [Storybook's docs site](https://storybook.js.org/docs).

### Examples

View [Component Encyclopedia](https://storybook.js.org/showcase) to see how leading teams use Storybook.

Use [storybook.new](https://storybook.new) to quickly create an example project in Stackblitz.

Storybook comes with a lot of [addons](https://storybook.js.org/docs/react/configure/storybook-addons) for component design, documentation, testing, interactivity, and so on. Storybook's API makes it possible to configure and extend in various ways. It has even been extended to support React Native, Android, iOS, and Flutter development for mobile.

## Projects

### Addons

| Addons                                                                    |                                                                            |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [a11y](code/addons/a11y/)                                                 | Test components for user accessibility in Storybook                        |
| [actions](code/addons/actions/)                                           | Log actions as users interact with components in the Storybook UI          |
| [backgrounds](code/addons/backgrounds/)                                   | Let users choose backgrounds in the Storybook UI                           |
| [cssresources](https://github.com/storybookjs/addon-cssresources)         | Dynamically add/remove CSS resources to the component iframe               |
| [design assets](https://github.com/storybookjs/addon-design-assets)       | View images, videos, and weblinks alongside your story                     |
| [docs](code/addons/docs/)                                                 | Add high quality documentation to your components                          |
| [events](https://github.com/storybookjs/addon-events)                     | Interactively fire events to components that respond to EventEmitter       |
| [google-analytics](https://github.com/storybookjs/addon-google-analytics) | Reports google analytics on stories                                        |
| [graphql](https://github.com/storybookjs/addon-graphql)                   | Query a GraphQL server within Storybook stories                            |
| [jest](code/addons/jest/)                                                 | View the results of components' unit tests in Storybook                    |
| [links](code/addons/links/)                                               | Create links between stories                                               |
| [measure](code/addons/measure/)                                           | Visually inspect the layout and box model within the Storybook UI          |
| [outline](code/addons/outline/)                                           | Visually debug the CSS layout and alignment within the Storybook UI        |
| [query params](https://github.com/storybookjs/addon-queryparams)          | Mock query params                                                          |
| [storyshots](code/addons/storyshots-core/)                                | Snapshot testing for components in Storybook                               |
| [storysource](code/addons/storysource/)                                   | View the code of your stories within the Storybook UI                      |
| [viewport](code/addons/viewport/)                                         | Change display sizes and layouts for responsive components using Storybook |

See [Addon / Framework Support Table](https://storybook.js.org/docs/react/api/frameworks-feature-support)

### Deprecated Addons

| Addons                                                                             |                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [contexts](https://storybook.js.org/addons/@storybook/addon-contexts/)             | Addon for driving your components under dynamic contexts   |
| [info](https://github.com/storybookjs/deprecated-addons/tree/master/addons/info)   | Annotate stories with extra component usage information    |
| [knobs](https://github.com/storybookjs/addon-knobs)                                | Interactively edit component prop data in the Storybook UI |
| [notes](https://github.com/storybookjs/deprecated-addons/tree/master/addons/notes) | Annotate Storybook stories with notes                      |
| [options](https://www.npmjs.com/package/@storybook/addon-options)                  | Customize the Storybook UI in code                         |

To continue improving your experience, we have to eventually deprecate certain addons in favor of new and better tools.

If you're using info/notes, we highly recommend you migrate to [docs](code/addons/docs/) instead, and [here is a guide](code/addons/docs/docs/recipes.md#migrating-from-notesinfo-addons) to help you.

If you're using contexts, we highly recommend you migrate to [toolbars](https://github.com/storybookjs/storybook/tree/next/code/addons/toolbars) and [here is a guide](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-addon-contexts) to help you.

### Development scripts

The project runs on the ![Static Badge](https://img.shields.io/badge/node-v18.17.0-blue)

### To visually display components, you need

```
npm i
npm run storybook
```

### To publish a new version of the project, you need:

```
Remove folder .dist
npm run rollup
npm publish
```
