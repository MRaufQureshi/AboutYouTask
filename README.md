# AboutYouTask

### Table of Contents

- [Getting Started](#getting-started)
- [Testing Framework](#testing-framework)
- [Local Setup](#local-setup)
- [Running E2E tests](#running-e2e-tests-locally)
- [Task Checklist](#what-cases-have-been-checked)
---

# Getting Started
To install the dependencies you're gonna need to authenticate your npm client.

The tests cases are coded in `Typescript` and project has following files and folders defined which should enable any QA/dev to start writing tests right away.
- `object` - Consists of `Base` class which has [wrappers](https://github.com/MRaufQureshi/AboutYouTask/tree/main/test/object/Base.ts) of webdriver
- `api` - To maintain and write [api](https://github.com/MRaufQureshi/AboutYouTask/tree/main/test/src/api).
- `data` - To set default [labels and titles](https://github.com/MRaufQureshi/Task/tree/main/test/src/data).
- `pageobjectss` - To maintain [page objects](https://github.com/MRaufQureshi/AboutYouTask/tree/main/test/src/pageobjects).
- `specs` - To code all [test cases](https://github.com/MRaufQureshi/Task/tree/main/test/src/specs).

# Testing Framework

### WebdriverIO for Node.js
For detailed documentation of WebdriverIO and its related API references is [here](https://webdriver.io/docs/gettingstarted).
### Jasmine for JavaScript
For detailed documentation of [Jasmine](https://jasmine.github.io/).

# Local Setup
Clone this repo : `https://github.com/MRaufQureshi/AboutYouTask.git`

Run `yarn create wdio`

Following are the values that should be provided in order to setup the framework.

| Question                                                 | Input Value                             | 
| -------------------------------------------------------- | --------------------------------------- | 
| Where is your automation backend located?                | On my local machine 
| Which framework do you want to use?                      | jasmine
| Do you want to use a compiler?                           | TypeScript (https://www.typescriptlang.org/)
| Where are your test specs located?                       | *Please select path to the specs folder of this repo
| Do you want WebdriverIO to autogenerate some test files? | No
| Which reporter do you want to use?                       | spec
| Do you want to add a plugin to your test setup?          | wait for
| Do you want to add a service to your test setup?         | chromedriver
| What is the base url?                                    | https://m.aboutyou.com 
| Do you want me to run `npm install`                      | Yes

# Running E2E tests locally
First, change the directory via: `$ cd path to the specs folder in this repo` and make sure wdio.config.ts is in place.
Optionally, Run `yarn` to ensure dependencies are installed.

To start the test, run: `$ npm run wdio`

**Optionally**, in `data.ts` file, adjust the configuration accordingly.

**Example:**

```sh
    redirectURL:  'https://miro.com' ,
    bearer:  ''
```

## Test Assertions

In the test cases you can use [expect-webdriverio](https://github.com/webdriverio/expect-webdriverio).

# What cases have been checked

- [x] Verify Home page  UI
- [x] Verify Search page UI
- [x] Perform "Search" functionality
- [x] Add "Item" to basket
- [ ] Verify "Basket" page using API to add product (WIP)

### Missing Test cases
- Description in test cases defined in .xlxs file 


