import { load } from 'signal-exit';
import userData from '../fixtures/users/userData.json';

    const selectorsList = {
      usernameField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
      passwordField: ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',
      urlField: 'pathname', 
      submitButton: '.oxd-button',
      topBarTitle: '.oxd-topbar-header-breadcrumb > .oxd-text',
      errorAlert: "[role='alert']",
      dashboardBackground: '.orangehrm-dashboard-grid',
      infoSideButton: '#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(6) > a > svg',
      firstNameInfoField: '.orangehrm-firstname',
      middleNameInfoField: '.orangehrm-middlename',
      lastNameInfoField: '.orangehrm-lastname',
      employeeIdField: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
      otherIdField: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
      driverLicenseNumberField:':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
      licenseExpiryDateField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
      nationalityField: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
      maritalStatusField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
      dateOfBirthOption: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
      maleGenderOption: ':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input',
      firstSaveButton: ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button',
      closeDateButton: '.--close',
      successfullyAlertCloseButton: '.oxd-toast-close-container'
}

describe('Orange HRM Testing', () => {
  it('Login - Sucess', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.usernameSuccess)
    cy.get(selectorsList.passwordField).type(userData.passwordSuccess)
    cy.get(selectorsList.submitButton).click()
    cy.location(selectorsList.urlField).should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardBackground)
  })
  it('User Info Updating - Success', () => {
     cy.visit('/auth/login')
     cy.get(selectorsList.usernameField).type(userData.usernameSuccess)
     cy.get(selectorsList.passwordField).type(userData.passwordSuccess)
     cy.get(selectorsList.submitButton).click()
     cy.waitFor('8000ms')
     cy.location(selectorsList.urlField).should('equal', '/web/index.php/dashboard/index')
     cy.get(selectorsList.dashboardBackground)
     cy.get(selectorsList.infoSideButton).click()
     cy.location(selectorsList.urlField).should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7')
     cy.get(selectorsList.firstNameInfoField).clear().type('Ayrton')
     cy.get(selectorsList.middleNameInfoField).clear().type('Senna')
     cy.get(selectorsList.lastNameInfoField).clear().type('da Silva')
     cy.get(selectorsList.employeeIdField).clear().type('8888')
     cy.get(selectorsList.otherIdField).clear().type('8855')
     cy.get(selectorsList.driverLicenseNumberField).clear().type('80818081')
     cy.get(selectorsList.licenseExpiryDateField).clear().type('2028-08-08')
     cy.get(selectorsList.closeDateButton).click()
     cy.get(selectorsList.nationalityField).click()
     cy.contains('Brazilian').click()
     cy.get(selectorsList.maritalStatusField).click()
     cy.contains('Married').click()
     cy.get(selectorsList.dateOfBirthOption).clear().type('1960-03-21')
     cy.get(selectorsList.closeDateButton).click()
     cy.get(selectorsList.maleGenderOption).click()
     cy.get(selectorsList.firstSaveButton).click()
     cy.get(selectorsList.successfullyAlertCloseButton) // Just to verify if the successfully alert shows up
  })
  it('Login - Fail', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.usernameFail)
    cy.get(selectorsList.passwordField).type(userData.passwordFail)
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.errorAlert)
  })
})