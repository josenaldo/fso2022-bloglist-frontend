# Full Stack JavaScript Project Starter Guide - Frontend

In this guide, we will build a React app using Vite, a build tool that aims to provide a faster and more streamlined development experience for modern web development. Vite leverages the native ES modules feature in modern browsers to enable a fast and efficient development experience. It also provides a rich plugin ecosystem to extend its functionality.

## Table of Contents

- [Full Stack JavaScript Project Starter Guide - Frontend](#full-stack-javascript-project-starter-guide---frontend)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Project Setup](#project-setup)
    - [Creating a New React App with Vite](#creating-a-new-react-app-with-vite)
    - [Add Development Libraries](#add-development-libraries)
    - [Add Main Libraries](#add-main-libraries)
    - [Add NPM Scripts](#add-npm-scripts)
    - [Generate readme](#generate-readme)
    - [Generate license](#generate-license)
    - [Generate `.gitignore`](#generate-gitignore)
    - [Generate `.editorconfig`](#generate-editorconfig)
    - [Configure ESlint](#configure-eslint)
    - [Configure prettier](#configure-prettier)
  - [Project structure](#project-structure)
  - [Deploying to Vercel](#deploying-to-vercel)
  - [Tests](#tests)
    - [Installing Test Libraries](#installing-test-libraries)
    - [Configuring the Testing Environment](#configuring-the-testing-environment)
    - [Running Tests](#running-tests)
  - [E2E Tests](#e2e-tests)
    - [Installing Cypress](#installing-cypress)
    - [Configuring Cypress](#configuring-cypress)
    - [Running Cypress](#running-cypress)
    - [Improving Cypress Tests](#improving-cypress-tests)
      - [Configure Cypress environment variables](#configure-cypress-environment-variables)
      - [Custom Commands](#custom-commands)
        - [Resetting the database](#resetting-the-database)
        - [Create a user](#create-a-user)
        - [Logging in](#logging-in)
        - [Create a blog](#create-a-blog)

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

To start writing tests for your React application, you will need to install some test libraries. You can do this using the following command:

```sh
yarn add @testing-library/react @testing-library/jest-dom @testing-library/user-event --dev
```

### Configuring the Testing Environment

The tests should be created alongside the components and should be named with either the `.test.js` or `.spec.js` extension.

### Running Tests

To run the tests, simply execute the following command:

```sh
yarn test
```

## E2E Tests

E2E tests are used to test the application as a whole from the user's perspective. They are usually written using a framework like Cypress.

### Installing Cypress

You can install Cypress using the following command:

```sh
yarn add cypress --dev
```

You should also install `eslint-plugin-cypress` to get Cypress-specific linting rules.

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

To run Cypress tests, you will need to start both the backend and frontend. Start the backend in test mode using the following command:

```json
"start:test": "cross-env NODE_ENV=test node index.js"
```

To start both the backend and the frontend, use the following commands:

Backend:

  ```sh
  yarn start:test
  ```

Frontend:

  ```sh
  yarn start
  ```

When both the frontend and the backend are running, you can run the Cypress tests using the following command:

```sh
yarn cypress:open
```

This will open the Cypress test runner. You can then select the test file to run.

1. Create an "E2E Testing"

   When you run yarn cypress:open in your terminal, it will launch the Cypress test runner. In the Cypress test runner, you will be prompted to select the type of tests you want to run. In this case, you should select "E2E Testing". After selecting the test type, click "Continue".

2. Select a browser

   Next, the Cypress test runner will prompt you to select a browser in which to run your tests. For example, you might select Chrome. Once you have selected a browser, Cypress will launch a new browser window to run your tests in.

3. Create a new spec

   In the new browser window, you can click "Create new spec" to create a new test file. In this case, let's create a new file at `cypress/e2e/blog_list_app.cy.js.`

4. Write your tests

   Once you have created the test file, you can open it in your code editor of choice (e.g. VS Code) and start writing your tests. You can save your test file and the Cypress test runner will automatically detect the changes and run your tests.

5. Run your tests

   As your tests run, you can observe the output of the tests in the Cypress test runner. If you want to see more detailed output, you can also open the Chrome console in the Cypress browser window to view additional logs and messages.

6. Run your tests in headless mode

   If you want to run your tests in headless mode, you can run the following command:

   ```sh
   yarn cypress:run
   ```

   This will run your tests in headless mode and output the results to the terminal.

### Improving Cypress Tests

#### Configure Cypress environment variables

To avoid hardcoding URLs in our Cypress tests, we can set environment variables in the `cypress.config.js` file. This allows us to easily switch between different URLs and prevents us from having to update URLs in multiple test files.

For example, we can set the `baseUrl` variable to the URL of our frontend app and the `BACKEND` variable to the URL of our backend API:

```js
// ...
baseUrl: 'http://localhost:3004',
env: {
  BACKEND: 'http://localhost:3003',
},
// ...
```

We can then use these variables in our tests by referencing `Cypress.env('BACKEND')`, for backend, or letting Cypress automatically resolve the `baseUrl` variable, using it as a prefix for the URL:

```js
// Using Cypress.env('BACKEND') to get the backend URL
cy.request('POST', `${Cypress.env('BACKEND')}/api/testing/reset`)

// baseUrl is automatically resolved to http://localhost:3004 and used
// as a prefix for the URL '/' in cy.visit()
cy.visit('/')

```

By using environment variables, we can easily switch between local and production URLs and keep our tests DRY (Don't Repeat Yourself).

#### Custom Commands

Custom commands are a powerful feature in Cypress that allow us to create our own commands that can be reused in our tests. We can use custom commands to simplify our tests and reduce duplication.

To create a custom command, we need to add it to the `cypress/support/commands.js` file. This file is loaded by Cypress before every test file. In this file, we can define new commands using the `Cypress.Commands.add()` method.

##### Resetting the database

Before running each test, we need to ensure that the database is in a known state. One way to achieve this is to reset the database by calling a testing controller in the backend.

To more details about how to implement this in the backend, see the [INIT.md file in Blog list backend](https://github.com/josenaldo/fso2022-bloglist-backend/blob/main/INIT.md).

To reset the database in Cypress, we can create a custom command that makes a request to the backend to reset the database. This command can then be called in the `beforeEach` hook of each test file.

```js
// cypress/support/commands.js
Cypress.Commands.add('resetDatabase', () => {
  cy.request('POST', `${Cypress.env('BACKEND')}/api/testing/reset`)
})
```

To call this command in our tests, we can use the `cy` object:

```js
beforeEach(() => {
  cy.resetDatabase()
})
```

##### Create a user

To avoid having to create a new user for each test, we can create a custom command to create a user. This command can then be called in the `beforeEach` hook of each test file.

```js
// cypress/support/commands.js
Cypress.Commands.add('addUser', (user) => {
  cy.request('POST', `${Cypress.env('BACKEND')}/api/users`, user)
})
```

To call this command in our tests, we can use the `cy` object:

```js
beforeEach(() => {
  cy.resetDatabase()
  cy.addUser({
    name: 'Test User',
    username: 'testuser',
    password: 'testpassword',
  })
})
```

##### Logging in

To avoid having to log in for each test, we can create a custom command to log in. This command can then be called in the `beforeEach` hook of each describe block that requires a logged in user.

```js
// cypress/support/commands.js
Cypress.Commands.add('login', ({ username, password }) => {
  cy.request('POST', `${Cypress.env('BACKEND')}/api/login`, {
    username: username,
    password: password,
  }).then((response) => {
    localStorage.setItem(
      Cypress.env('LOGGED_USER_KEY'),
      JSON.stringify(response.body)
    )
    cy.visit('/')
  })
})

```

To call this command in our tests, we can use the `cy` object:

```js
 beforeEach(function () {
  cy.login({ username: testUser.username, password: testUser.password })
})

```

##### Create a blog

To avoid having to create a new blog for each test, we can create a custom command to create a blog. This command can then be called in the `beforeEach` hook of each describe block that requires a blog.

```js
// cypress/support/commands.js
Cypress.Commands.add('createBlog', ({ title, author, url }) => {
  const user = localStorage.getItem(Cypress.env('LOGGED_USER_KEY'))
  const token = JSON.parse(user).token

  cy.request({
    method: 'POST',
    url: `${Cypress.env('BACKEND')}/api/blogs`,
    body: { title, author, url },
    headers: {
      Authorization: `bearer ${token}`,
    },
  })

  cy.visit('/')
})

```

To call this command in our tests, we can use the `cy` object:

```js
beforeEach(function () {
  cy.createBlog({
    title: 'Test blog',
    url: 'http://test.com',
    author: 'Test author',
  })
})

```
