# Cypress Automation Framework (JavaScript)

## 📌 Overview

This project is an end-to-end (E2E) test automation framework built using **Cypress with JavaScript**. It is designed to automate web application testing with fast execution, easy debugging, and reliable results.

---

## 🚀 Features

* Easy setup and configuration
* Fast test execution
* Built-in waiting (no need for explicit waits)
* Automatic screenshots & videos on failure
* Powerful debugging tools
* Supports API testing
* Cross-browser testing support

---

## 🛠️ Tech Stack

* **Language:** JavaScript
* **Framework:** Cypress
* **Assertion Library:** Chai (built-in)
* **Test Runner:** Cypress Test Runner

---

## 📂 Project Structure

```
cypress/
│── e2e/                # Test files (specs)
│── fixtures/           # Test data (JSON files)
│── support/            # Custom commands & utilities
│── screenshots/        # Screenshots on failure
│── videos/             # Test execution videos
cypress.config.js       # Cypress configuration file
package.json            # Project dependencies
```

---

## ⚙️ Installation

1. Clone the repository:

```
git clone <your-repo-url>
cd <project-folder>
```

2. Install dependencies:

```
npm install
```

3. Install Cypress:

```
npm install cypress --save-dev
```

---

## ▶️ Running Tests

### Open Cypress Test Runner (UI Mode)

```
npx cypress open
```

### Run Tests in Headless Mode

```
npx cypress run
```

---

## 🧪 Writing Test Cases

Example test:

```javascript
describe('Sample Test', () => {
  it('should perform a basic action', () => {
    cy.visit('https://example.com')
    cy.get('input[name="q"]').type('Test{enter}')
    cy.contains('Test').should('be.visible')
  })
})
```

---

## 🔧 Custom Commands

You can create reusable commands in:

```
cypress/support/commands.js
```

Example:

```javascript
Cypress.Commands.add('login', (username, password) => {
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get('#login').click()
})
```

---

## 📊 Reporting

* Cypress automatically captures:

  * Screenshots on failure
  * Videos of test runs (headless mode)
* Can integrate with reporting tools like:

  * Mochawesome
  * Allure Reports

---

## 🌐 Environment Configuration

You can define environment variables in:

```
cypress.config.js
```

Example:

```javascript
env: {
  baseUrl: 'https://example.com'
}
```

---

## 📱 Cross Browser Testing

Run tests in different browsers:

```
npx cypress run --browser chrome
npx cypress run --browser edge
npx cypress run --browser firefox
```

---

## ✅ Best Practices

* Use **data-testid** or stable selectors
* Avoid hard waits (`cy.wait()`)
* Keep tests independent
* Use fixtures for test data
* Follow Page Object Model (optional for large projects)

---

## 🐞 Debugging Tips

* Use `.debug()` in commands
* Use browser DevTools
* Check Cypress logs in runner

---

## 📌 Future Enhancements

* CI/CD integration
* Parallel execution
* Advanced reporting
* API + UI combined testing

---

## 🤝 Contribution

Feel free to contribute by raising issues or submitting pull requests.

---

## 📄 License

This project is open-source and available for use and modification.

