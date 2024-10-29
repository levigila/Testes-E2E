import userData from '../fixtures/users/userData.json';

const selectorsList = {
  usernameField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
  passwordField: ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',
  urlField: 'pathname', 
  submitButton: '.oxd-button',
  topBarTitle: '.oxd-topbar-header-breadcrumb > .oxd-text',
  errorAlert: "[role='alert']",
}

describe('Orange HRM Testing', () => {
  it('Login - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.usernameSuccess)
    cy.get(selectorsList.passwordField).type(userData.passwordSuccess)
    cy.get(selectorsList.submitButton).click()
    cy.location(selectorsList.urlField).should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.topBarTitle).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.usernameFail)
    cy.get(selectorsList.passwordField).type(userData.passwordFail)
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.errorAlert)
  })
})