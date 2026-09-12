# saucedemo-playwright-js
# SauceDemo Playwright Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript\&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js\&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=github-actions\&logoColor=white)

## 📌 Project Overview

This project is a **UI Test Automation Framework** developed using **Playwright with JavaScript** to automate the SauceDemo web application.

Application under test:

**https://www.saucedemo.com/**

The framework follows automation best practices such as:

* Page Object Model (POM)
* Reusable fixtures
* Test data management
* Centralized configuration
* Chromium test execution
* Parallel test execution
* HTML and Allure reporting
* Screenshot and video capture
* Git version control
* GitHub Actions CI/CD

SauceDemo is a demo e-commerce application designed for practicing automated testing workflows.

---

## 🛠️ Technology Stack

| Technology     | Purpose                  |
| -------------- | ------------------------ |
| Playwright     | Web UI automation        |
| JavaScript     | Programming language     |
| Node.js        | Runtime environment      |
| npm            | Package management       |
| Git            | Version control          |
| GitHub         | Source code repository   |
| GitHub Actions | CI/CD                    |
| HTML Report    | Test execution reporting |

---

## 📂 Project Structure

```text
saucedemo-playwright-js/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── fixtures/
│   └── ...
│
├── pages/
│   └── LoginPage.js
│   └── InventoryPage.js
│   └── CartPage.js
│   └── CheckoutPage.js
│
├── test-data/
│   └── testData.js
│
├── tests/
│   └── login/
│       └── login.spec.js
│   └── ...
│
├── utils/
│   ├── logger.js
│   └── testData.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

---

## 🎯 Test Scenarios

The framework can be extended to cover the following major SauceDemo workflows:

### 🔐 Login

* Verify successful login with valid credentials
* Verify login with invalid credentials
* Verify locked-out user
* Verify required field validation
* Verify login error messages

### 🛍️ Products

* Navigate to a product detail page
* Verify the Add to cart button
* Add and remove a product from the cart
* Verify cart badge visibility and item count

The implemented product tests are in `tests/product/product.spec.js` and use
`pages/ProductPage.js`.

### 🛒 Shopping Cart

* Verify added products
* Verify cart item count
* Remove products from cart
* Verify cart is empty

### 💳 Checkout

* Enter customer information
* Continue checkout
* Verify order summary
* Verify total amount
* Complete order
* Verify successful order confirmation

### 🚪 Logout

* Open menu
* Logout
* Verify user is redirected to login page

---

## 👤 Test Credentials

SauceDemo provides demo users for testing different login scenarios. Sauce Labs training material documents users such as `standard_user`, `locked_out_user`, `problem_user`, and `performance_glitch_user`, with the demo password `secret_sauce`.

Example:

```text
Username: standard_user
Password: secret_sauce
```

For automation projects, credentials should preferably be stored using environment variables rather than hardcoded in source code.

Example:

```env
SAUCE_USERNAME=standard_user
SAUCE_PASSWORD=secret_sauce
```

Do **not** commit `.env` files containing secrets to GitHub.

---

## ⚙️ Prerequisites

Install the following software before running the project:

### Node.js

Verify:

```bash
node --version
```

### npm

Verify:

```bash
npm --version
```

### Git

Verify:

```bash
git --version
```

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/saucedemo-playwright-js.git
```

### 2. Navigate to the project

```bash
cd saucedemo-playwright-js
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

For Linux CI environments:

```bash
npx playwright install --with-deps
```

### 5. Configure environment values

Environment values are loaded from `config/.env`. The file should contain:

```env
SAUCE_USERNAME=standard_user
SAUCE_PASSWORD=secret_sauce
BASE_URL=https://www.saucedemo.com
```

Environment files are excluded from Git by `.gitignore`.

---

## ▶️ Running Tests

### Run all tests

```bash
npm test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/login/login.spec.js
```

### Run tests using a specific browser

#### Chromium

```bash
npx playwright test --project=chromium
```

Firefox and WebKit are currently commented out in `playwright.config.js`.

---

## 🔍 Debugging Tests

Run Playwright in debug mode:

```bash
npx playwright test --debug
```

Run with Playwright Inspector:

```bash
PWDEBUG=1 npx playwright test
```

On Windows PowerShell:

```powershell
$env:PWDEBUG=1
npx playwright test
```

---

## 📊 Playwright HTML Report

After test execution, generate/open the HTML report:

```bash
npx playwright show-report
```

The report provides:

* Test results
* Passed tests
* Failed tests
* Execution duration
* Screenshots
* Videos
* Trace information

---

## Allure Report

Run the Chromium suite, generate the Allure report, and open it locally:

```bash
npm run test:chromium
npm run report:allure
npm run report:allure:open
```

Allure results are written to `allure-results/` and the generated report is
written to `allure-report/`. Both directories are ignored by Git.

## Logger

Use the shared logger from `utils/logger.js` for page-object actions and
diagnostics:

```javascript
const { logger } = require('../utils/logger');

logger.info('Product page opened');
logger.warn('Login error displayed');
logger.error('Product could not be added');
logger.debug('Additional diagnostic details');
```

Debug messages require `DEBUG=true`. Never log passwords or other secrets.

---

## Browser Configuration

Chromium is the currently enabled browser project:

```bash
npm run test:chromium
```

Firefox and WebKit project definitions remain available in the config as
comments and can be enabled when cross-browser coverage is needed.

---

## 🧱 Page Object Model

This project follows the **Page Object Model (POM)** design pattern.

Example:

```javascript
class LoginPage {

    constructor(page) {
        this.page = page;

        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

module.exports = { LoginPage };
```

This approach helps to:

* Reduce duplicate code
* Improve maintainability
* Improve readability
* Centralize locators
* Reuse page actions

---

## 🧪 Example Test

```javascript
const { test, expect } = require('@playwright/test');

test('Valid User Login', async ({ page }) => {

    await page.goto('/');

    await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('secret_sauce');

    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/inventory/);
});
```

---

## 🔧 Configuration

The Playwright configuration is maintained in:

```text
playwright.config.js
```

Example:

```javascript
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

    testDir: './tests',

    use: {
        baseURL: 'https://www.saucedemo.com',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure'
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        },

        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] }
        },

        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] }
        }
    ],

    reporter: 'html'
});
```

With `baseURL` configured, tests can simply use:

```javascript
await page.goto('/');
```

instead of:

```javascript
await page.goto('https://www.saucedemo.com/');
```

---

## 🔐 Environment Variables

Create a `.env` file locally:

```env
SAUCE_USERNAME=standard_user
SAUCE_PASSWORD=secret_sauce
BASE_URL=https://www.saucedemo.com
```

Add `.env` to `.gitignore`:

```text
.env
```

Never commit credentials or other secrets to GitHub.

For GitHub Actions, configure sensitive values using **GitHub Repository Secrets**.

---

## 🔄 GitHub Actions CI/CD

The project includes a GitHub Actions workflow:

```text
.github/workflows/playwright.yml
```

The workflow can automatically:

1. Checkout the repository
2. Install Node.js
3. Install npm dependencies
4. Install Playwright browsers
5. Execute automated tests
6. Generate and upload HTML and Allure reports
7. Send a success email when all tests pass

Example workflow:

```yaml
name: Playwright Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      - name: Run Playwright tests
        run: npx playwright test

      - name: Generate Allure report
        if: always()
        run: npm run report:allure

      - name: Upload Allure report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: allure-report
          path: allure-report/
          retention-days: 30

      - name: Send success email
        if: success()
        uses: dawidd6/action-send-mail@v3
        with:
          server_address: ${{ secrets.SMTP_SERVER }}
          server_port: ${{ secrets.SMTP_PORT }}
          username: ${{ secrets.SMTP_USERNAME }}
          password: ${{ secrets.SMTP_PASSWORD }}
          subject: SauceDemo Playwright tests passed
          to: pradeepjadhav3@gmail.com
          from: pradeepjadhav3@gmail.com
          body: Test run passed. See the uploaded Allure report artifact.

      - name: Upload Playwright Report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30
```

### Required GitHub Secrets

Add these repository secrets under **Settings > Secrets and variables >
Actions**:

* `SMTP_SERVER`, for example `smtp.gmail.com`
* `SMTP_PORT`, for example `465`
* `SMTP_USERNAME`, the sender email address
* `SMTP_PASSWORD`, an SMTP password or provider app password

The email step runs only when the test job succeeds. Failed or cancelled runs
upload available reports but do not send an email.

---

## 📈 CI/CD Benefits

With GitHub Actions, tests can automatically run whenever code is pushed to the repository.

```text
Developer
    ↓
Git Push
    ↓
GitHub Repository
    ↓
GitHub Actions
    ↓
Install Dependencies
    ↓
Playwright Tests
    ↓
Test Report
```

This helps detect automation or application issues early.

---

## 📝 Useful npm Commands

| Command                                  | Purpose                  |
| ---------------------------------------- | ------------------------ |
| `npm install`                            | Install dependencies     |
| `npx playwright install`                 | Install browsers         |
| `npx playwright test`                    | Run all tests            |
| `npx playwright test --headed`           | Run with browser visible |
| `npx playwright test --debug`            | Debug tests              |
| `npx playwright show-report`             | Open HTML report         |
| `npx playwright test --project=chromium` | Run Chromium tests       |
| `npx playwright test --project=firefox`  | Run Firefox tests        |
| `npx playwright test --project=webkit`   | Run WebKit tests         |

---

## 📌 Best Practices

* Use Page Object Model
* Prefer Playwright locators over brittle CSS/XPath selectors
* Avoid hardcoded credentials
* Store secrets in environment variables
* Keep test data separate from test logic
* Use meaningful test names
* Avoid unnecessary `waitForTimeout()`
* Use Playwright's built-in auto-waiting
* Keep tests independent
* Capture screenshots/traces on failure
* Run tests across multiple browsers
* Run tests automatically through GitHub Actions

---

## 🐛 Troubleshooting

### Browser not installed

Run:

```bash
npx playwright install
```

### Test timeout

Check:

* Application availability
* Locator correctness
* Network connection
* Playwright timeout configuration

### HTML report not opening

Run:

```bash
npx playwright show-report
```

### GitHub Actions failure

Check:

```text
.github/workflows/playwright.yml
```

Then open:

```text
GitHub Repository → Actions → Workflow Run
```

Review the failed step and its logs.

---

## 📄 License

This project is intended for **learning, demonstration, and test automation practice**.

---

## 👨‍💻 Author

**Pradeep Jadhav**

QA Automation Engineer

### Skills Demonstrated

* Playwright
* JavaScript
* UI Automation
* Page Object Model
* Test Automation Framework Design
* Cross-Browser Testing
* Git
* GitHub
* GitHub Actions
* CI/CD
* Test Reporting

---

## ⭐ Project Goal

The goal of this project is to demonstrate a **maintainable and scalable Playwright automation framework** for an e-commerce web application, including local execution, cross-browser testing, reporting, version control, and CI/CD integration.

