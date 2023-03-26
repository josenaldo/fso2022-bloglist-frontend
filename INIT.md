# Full Stack JavaScript Project Starter Guide - Frontend

In this tutorial, we will build a React app using Vite, a build tool that aims to provide a faster and more streamlined development experience for modern web development. Vite leverages the native ES modules feature in modern browsers to enable a fast and efficient development experience. It also provides a rich plugin ecosystem to extend its functionality.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v14.15.4 or later)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) (v1.22.10 or later)

## Project Setup

### Creating a New React App with Vite

To create a new React app with Vite, we will use the 'create-vite-app' CLI tool. To install it globally, run the following command in your terminal:

```sh
 yarn create vite
```

This will install the 'create-vite-app' CLI tool globally on your machine. To create a new React app, run the following command in your terminal:

```sh
 yarn create vite my-react-app --template react
```

This will create a new React app in a directory named 'my-react-app'. To start the development server, run the following command in your terminal:

```sh
 cd my-react-app
 yarn dev
```

This will start the development server on port 3000. To view the app in the
browser, navigate to <http://localhost:3000>.

### Add Development Libraries

### Add Main Libraries

- axios
- prop-types
-

### Add NPM Scripts

### Generate readme

### Generate license

### Generate `.gitignore`

### Generate `.editorconfig`

### Configure ESlint

### Configure prettier

## Project structure

## Deploying to Vercel

## Tests

### Installing Test Libraries

```sh
yarn add @testing-library/react @testing-library/jest-dom @testing-library/user-event --dev
```

### Configuring the Testing Environment

Os testes devem ser criados junto com os componentes e devem ser nomeados com a extensão `.test.js` ou `.spec.js`.

### Running Tests

```sh
yarn test
```

## E2E Tests

E2E tests are used to test the application as a whole. They are used to test the application from the user's perspective. E2E tests are usually written using a framework like Cypress.

### Installing Cypress

```sh
yarn add cypress --dev
```

Also, install `eslint-plugin-cypress`, to get Cypress-specific linting rules.

```sh
yarn add eslint-plugin-cypress --dev
```

Then, change the `.eslintrc.js` file to include the `cypress` specific env and plugin:

```js

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    'jest/globals': true,
    'cypress/globals': true,
  },
  extends: [
    // ...
  ],
  overrides: [
    // ...
  ],
  parserOptions: {
    // ...
  },
  plugins: ['react', 'jest', 'cypress'],
  rules: {
    // ...
  },
  settings: {
    // ...
  },
}
```

### Configuring Cypress

In the `package.json` file, add the following script:

```json
// ...
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "cypress:open": "cypress open"
},
// ...
```

### Running Cypress

Unlike the frontend's unit tests, Cypress tests can be in the frontend or the backend repository, or even in their separate repository.

The tests require the tested system to be running. Unlike our backend integration tests, Cypress tests do not start the system when they are run.

Let's add an npm script to the backend which starts it in test mode, or so that NODE_ENV is test.

```json
"start:test": "cross-env NODE_ENV=test node index.js"
```

In backend, create a testing controller, in backend. This controller only exists in test mode. Its purpose is to reset the database.

In app.js, add testing controller to the middleware stack if NODE_ENV is test.

Then, start bothe backend and frontend.

Backend:

  ```sh
  yarn start:test
  ```

Frontend:

  ```sh
  yarn start
  ```

When both the frontend and the backend are running, we can run the Cypress tests.

```sh
yarn cypress:open
```

1. Cypress asks what type of tests we are doing. Let us answer "E2E Testing":
2. Continue with "Continue":
3. Next a browser is selected (e.g. Chrome) and start testing in Chrome
4. In the open windows, click "Create new spec":
5. Let us create the test file cypress/e2e/blog_list_app.cy.js:
6. We could edit the tests in Cypress but let us rather use VS Code:
7. The tests are executed automatically when the file is saved.
8. In the Cypress Browser window, open the chrome console and see the output of the tests.

### Writing Cypress Tests

#### Configure Cypress

In the cypress.config.js file, add the following:

```js
baseUrl: 'http://localhost:3004',
env: {
  BACKEND: 'http://localhost:3003',
},
```

This will set the base URL for the tests and the backend URL.

#### Reseting database

Before each test, we need to reset the database. We can do this by calling the testing controller in the backend.

Create a testing controller, in backend. This controller only exists in test mode.

execute The backend and the frontend. Then, run cypress.

Write tests for the blog list app.

If necessary, create custom commands for Cypress.
