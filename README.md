[![Build Status](https://showplans.semaphoreci.com/badges/showhub.svg?key=64d7a852-a1e2-4051-bfb4-1918e94b12df)](https://showplans.semaphoreci.com/badges/showhub/)
[![Coverage Status](https://coveralls.io/repos/github/showplans/showhub/badge.svg?branch=master&t=lHmvWV)](https://coveralls.io/github/showplans/showhub?branch=master)

# RoomUtilInfoSys📛

## Table of Contents:

- [Project overview](#project-overview)
- [Status](#status)
- [Technologies](#technologies)
- [Setting up development](#setting-up-development)
- [Making a Progressive Web App](#making-a-progressive-web-app)


# Project Overview

- This is project idea being  put in practices. It is named in development as `RoomUtilInfoSys` that means `Book a Room in CST`.
- We aim at solving disorder in using `CST Rooms`.  we want to make it clear so that any room that is not being used may be declared and booked for use if in need.
- Unlike before, classes were meeting in one room with different purpose and made one to spend unexpected time finding the other room to use 😭

# Status

RoomUtilInfoSys is still in progress. we expect it to be finalized by this coming `December 2022`.

# Technologies

## Front-End part

- This project is made by `Reactjs` , together with `SCSS/SASS` and `Bootstrap` as Front-End part.

# Setting up development

## Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

## Node Installation
Install Node.js `Lts version`  from https://nodejs.org/en/download/ or using nvm
```
nvm install v18.12.1
nvm use v18.12.1
```


## Running the application
- Make sure that backend is up and running, as we will need data from backed to be used in UI. We may need some APIs and help us to run only UI only.
- download or clone the repository
- Run the following commands from `RoomUtilInfoSys` directory:
  ```
     npm install
     npm start
  ```
- Once the build is ready, head to [http://localhost:3000/](http://localhost:3000/)


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)


## Troubleshooting

### NPM Install — Adding Libraries in  package.json
### NPM Install — Stale Package Data Issues
On npm install... If you get a ton of messages about it using stale package data then reinstall all the project's dependencies.
```
$ rm -rf package-lock.json node_modules
$ npm cache clear --force
npm WARN using --force I sure hope you know what you are doing.
$ npm i && npm start
...
```
This force-rebuilds the lock file with up-to-date verification checksums.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Running eslint, prettier and tests
- `npm run lint`
- `npm run tests`
- `npm run prettier`
- `npm run prettier:ci`
- `npm run format`

## JavaScript Coding Standards

### Style Guide and Linting

We follow an extension of the [AirBnB JavaScript style guide](https://github.com/airbnb/javascript) with some minor tweaks. Ensure you have ESLint configured in your editor to get linting working in your code. We also use ESLint plugins for Meteor, React and JSX. If you find a case where you want to deviate from a linting rule, discuss with the rest of the team.


### JS transpilation

Write all code in ES2017+, Babel is used for transpilation.

Any [Stage 3 proposals](https://github.com/tc39/proposals#stage-3) and above can be used, in addition to [Static class fields](https://github.com/tc39/proposal-static-class-features/) which are currently Stage 2.


### Naming and Conventions

All files should try to export a class (static, uninstantiated or a singleton), or a variable constant.

- General folders should be named in camelCase.
- Class-exporting files should export a single class in PascalCase. The exported name should match that of the class (no default export). The filename should also match that of the class
- Variable-exporting files should export a single variable in UPPER_SNAKE_CASE. The exported name should match that of the variable (no default export). The filename should be the camelCase form of the named export.

### Libraries

- `react` used for building the `project UI`.

## Sass/SCSS Coding Standards

Older CSS uses ID based selectors, but BEM is strongly encouraged for new CSS. It is recommended to create a Sass file in your component folder and import into that component, using BEM to achieve CSS isolation for that component. CSS-in-JS, CSS modules or similar are currently not used.


## Structure

### Files and Folders

The list below represents the current folder structure.

- `src` - code entry point, front-end code
- `app` - generated code from build
- `public` - static assets


# Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)


          
                                  `E`
                            `E-----N----D----`
                                  `D`
                            
