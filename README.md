# AboutYouTask

🔔 Notebell - Hi there, 

It was recommend to timebox my challenge to 2-4 hours and if I take any shortcuts because of the limited time then I should just leave TODOs/ FIXMEs in the code. It is obvious that the code that I'm submitting is not timeboxed under 2-4 hours because I applied different approaches to implement test cases. I did ran into some troublshooting so I took more time. 

With all things considered I did try to implement basic user journey. Moreover I have added a `.xlxs` file in the repo which contains manual test cases as well. Not all test cases have been completely explained but please do pay attention to column `Test case Name` which represents critical features we need to consider while testing.

<img width="600" alt="XXX" src="https://www.monkeyuser.com/2022/unit-tests/248-unit-tests.png" class="center">

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
- `Manual Test cases` - Consists of manual [Test cases](https://github.com/MRaufQureshi/AboutYouTask/blob/main/AboutYou%20Test%20cases.xlsx)

Note: Column `Test Case Name` defines most of the business critical cases specific to product `SCAYLE` and some cases related to `AboutYou`  native app

- `object` - Consists of `Base` class which has [wrappers](https://github.com/MRaufQureshi/AboutYouTask/tree/main/test/object/Base.ts) of webdriver
- `api` - To maintain and write [api](https://github.com/MRaufQureshi/AboutYouTask/tree/main/test/src/api).
- `data` - To set default [labels and titles](https://github.com/MRaufQureshi/AboutYouTask/tree/main/test/src/data).
- `pageobjectss` - To maintain [page objects](https://github.com/MRaufQureshi/AboutYouTask/tree/main/test/src/pageobjects).
- `specs` - To code all [test cases](https://github.com/MRaufQureshi/AboutYouTask/blob/main/test/src/specs/BusinessRelevant.ts).

# Testing Framework

### WebdriverIO for Node.js
For detailed documentation of WebdriverIO and its related API references is [here](https://webdriver.io/docs/gettingstarted).
### Jasmine for JavaScript
For detailed documentation of [Jasmine](https://jasmine.github.io/).
### Axios for promise based HTTP client for the browser and node.js
For detailed documentation of [Axios](https://www.npmjs.com/package/axios)

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

## Test Assertions

In the test cases you can use [expect-webdriverio](https://github.com/webdriverio/expect-webdriverio).

# What cases have been checked

- [x] Verify Home page  UI
- [x] Verify Search page UI
- [x] Perform "Search" functionality
- [x] Add "Item" to basket
- [x] Verify "Basket" page using API to add product (WIP)

### Missing Test cases
- Description in test cases defined in .xlxs file 


