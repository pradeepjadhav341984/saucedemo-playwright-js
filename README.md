SauceDemo – End-to-End Test Plan
1. Test Plan Information
Item	Details
Project Name	SauceDemo E-Commerce Application
Application URL	https://www.saucedemo.com/
Application Type	Web-based E-Commerce
Testing Type	Functional + End-to-End + Regression
Primary Objective	Validate the complete shopping journey
Test Automation	Playwright + TypeScript/JavaScript
Framework	Page Object Model
Test Runner	Playwright Test
Browsers	Chrome, Firefox, Edge
Environment	Web
Priority	Critical business flows first
2. Test Objective

The objective is to verify that a user can successfully complete the complete e-commerce journey:

Login → Product Listing → Product Details → Add to Cart → Cart Validation → Checkout → Order Review → Place Order → Order Confirmation → Logout

The core areas generally covered for SauceDemo include login, inventory, cart and checkout.

3. Scope of Testing
In Scope
A. Login
Valid login
Invalid username
Invalid password
Empty username
Empty password
Locked-out user
Login error messages
Logout
B. Product / Inventory
Product listing
Product name
Product description
Product price
Product image
Add to cart
Remove from cart
Product sorting
Product details page
C. Shopping Cart
Add single product
Add multiple products
Cart badge
Cart contents
Product price
Remove product
Continue Shopping
Checkout
D. Checkout
Checkout form
First Name
Last Name
Postal Code
Mandatory-field validation
Continue
Cancel
E. Order Summary
Product validation
Quantity
Product price
Item total
Tax
Grand total
Finish button
F. Order Completion
Successful order
Confirmation message
Back Home
Cart state after purchase
G. Navigation
Hamburger menu
All Items
About
Logout
Reset App State
4. Out of Scope

The following should not be considered real production payment testing because SauceDemo is a demonstration/testing application:

Real payment gateway
Real credit/debit card transaction
Real bank transaction
Actual order fulfillment
Shipping integration
Real inventory backend
Real customer database
Production payment security
5. Test Environment
Component	Configuration
OS	Windows 10/11
Browser 1	Chrome
Browser 2	Firefox
Browser 3	Edge
Automation	Playwright
Language	TypeScript
Test Runner	Playwright Test
URL	https://www.saucedemo.com/
6. Test Data

Common SauceDemo test users include:

Username	Password	Purpose
standard_user	secret_sauce	Normal E2E flow
locked_out_user	secret_sauce	Negative login
problem_user	secret_sauce	Problem-user behavior
performance_glitch_user	secret_sauce	Performance behavior

These credentials and product examples are also documented in automation projects for SauceDemo.

Product Test Data
Product	Price
Sauce Labs Backpack	$29.99
Sauce Labs Bike Light	$9.99
Sauce Labs Bolt T-Shirt	$15.99
Sauce Labs Fleece Jacket	$49.99
Sauce Labs Onesie	$7.99
Test.allTheThings() T-Shirt (Red)	$15.99
7. End-to-End Test Scenario
E2E-001 – Complete Purchase Journey
Preconditions
Application is accessible.
Valid user credentials are available.
Browser is installed.
Test environment is available.
Steps
Navigate to SauceDemo.
Enter username.
Enter password.
Click Login.
Verify Inventory page.
Verify products are displayed.
Select a product.
Verify product details.
Add product to cart.
Add a second product.
Verify cart badge.
Open shopping cart.
Verify selected products.
Verify product prices.
Remove a product if required.
Click Checkout.
Enter First Name.
Enter Last Name.
Enter Postal Code.
Click Continue.
Verify Checkout Overview.
Verify products.
Verify item total.
Verify tax.
Verify total amount.
Click Finish.
Verify order confirmation.
Click Back Home.
Open menu.
Click Logout.
Verify user is returned to Login page.
Expected Result

The user should successfully complete the purchase journey and receive the order confirmation.

8. Detailed Test Cases
Login Test Cases
TC ID	Test Case	Expected Result	Priority
LOGIN_001	Login with valid credentials	User reaches Inventory page	P0
LOGIN_002	Invalid username	Error displayed	P1
LOGIN_003	Invalid password	Error displayed	P1
LOGIN_004	Empty username	Validation message displayed	P1
LOGIN_005	Empty password	Validation message displayed	P1
LOGIN_006	Empty username & password	Validation message displayed	P1
LOGIN_007	Locked user login	Login should be rejected	P0
LOGIN_008	Logout	User returns to login page	P0
9. Inventory Test Cases
TC ID	Test Case	Expected Result
INV_001	Verify inventory page	Inventory page displayed
INV_002	Verify product count	Products displayed correctly
INV_003	Verify product names	Names displayed correctly
INV_004	Verify product prices	Prices displayed correctly
INV_005	Verify product descriptions	Descriptions displayed
INV_006	Verify product images	Images displayed
INV_007	Sort products A-Z	Correct sorting
INV_008	Sort products Z-A	Correct sorting
INV_009	Sort price low-high	Lowest price first
INV_010	Sort price high-low	Highest price first
INV_011	Open product details	Correct product detail page
INV_012	Add product to cart	Product added
INV_013	Remove product from inventory	Product removed

The commonly documented inventory coverage includes product count, sorting, product details, prices and Add-to-Cart behavior.

10. Cart Test Cases
TC ID	Test Case	Expected Result
CART_001	Add one product	Cart count = 1
CART_002	Add two products	Cart count = 2
CART_003	Add all products	Cart count reflects all selections
CART_004	Open cart	Cart page displayed
CART_005	Verify product name	Correct product displayed
CART_006	Verify product price	Correct price displayed
CART_007	Remove product	Product removed
CART_008	Remove all products	Cart becomes empty
CART_009	Continue Shopping	Inventory page displayed
CART_010	Checkout from cart	Checkout page displayed
11. Checkout Test Cases
TC ID	Test Case	Expected Result
CHECKOUT_001	Click Checkout	Checkout form displayed
CHECKOUT_002	Submit empty form	First Name validation
CHECKOUT_003	First Name missing	Validation displayed
CHECKOUT_004	Last Name missing	Validation displayed
CHECKOUT_005	Postal Code missing	Validation displayed
CHECKOUT_006	Enter valid information	User proceeds
CHECKOUT_007	Click Cancel	User returns to cart
CHECKOUT_008	Verify checkout overview	Correct order displayed

The checkout flow uses separate information and overview steps before the completion page.

12. Order Summary Test Cases
TC ID	Test Case	Expected Result
ORDER_001	Verify product name	Correct
ORDER_002	Verify product price	Correct
ORDER_003	Verify quantity	Correct
ORDER_004	Verify item total	Correct calculation
ORDER_005	Verify tax	Correct calculation
ORDER_006	Verify grand total	Item total + tax
ORDER_007	Click Finish	Order completed
ORDER_008	Verify confirmation	Confirmation displayed
13. Navigation & Logout
TC ID	Test Case	Expected Result
NAV_001	Open hamburger menu	Menu displayed
NAV_002	Click All Items	Inventory displayed
NAV_003	Click About	About page opened
NAV_004	Click Logout	Login page displayed
NAV_005	Click Reset App State	Application state reset
NAV_006	Browser Back navigation	Navigation works correctly
NAV_007	Browser Refresh	Page remains stable
14. Negative Testing

Important negative scenarios:

Invalid login
Locked account
Empty login fields
Checkout without First Name
Checkout without Last Name
Checkout without Postal Code
Empty cart behavior
Removing product
Repeated add/remove operations
Invalid/special characters in checkout fields
Direct navigation to protected pages without authentication
15. UI Testing

Verify:

Page title
Logo
Buttons
Product images
Product names
Product prices
Cart icon
Menu
Checkout fields
Error messages
Confirmation message
Alignment
Visibility
Enabled/disabled state
16. Compatibility Testing

Execute the critical E2E flow on:

Browser	Coverage
Chrome	Full
Firefox	Full
Edge	Full
webkit  Full

For automation, Playwright is particularly suitable for running the same E2E suite across multiple browsers.

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
          server_address: smtp.gmail.com
          server_port: 465
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

* `SMTP_USERNAME`, the Gmail account used to send the email
* `SMTP_PASSWORD`, a Google App Password for that same account, not the normal Gmail password

For Gmail, enable 2-Step Verification on the sender account and create an App
Password under Google Account security. Set `SMTP_USERNAME` to that sender
account, for example `pradeepjadhav3@gmail.com`, and store the generated
16-character App Password in `SMTP_PASSWORD`.

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

