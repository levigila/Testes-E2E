import userData from '../fixtures/users/userData.json';
class ProfilePage {

selectorsList(){
    const selectors = {
        urlField: 'pathname',
        firstNameInfoField: '.orangehrm-firstname',
        middleNameInfoField: '.orangehrm-middlename',
        lastNameInfoField: '.orangehrm-lastname',
        employeeIdField: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
        otherIdField: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
        driverLicenseNumberField:':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
        licenseExpiryDateField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
        nationalityField: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
        personalNationality: '.oxd-select-dropdown > :nth-child(8)',
        maritalStatusField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
        dateOfBirthOption: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
        maleGenderOption: ':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input',
        firstSaveButton: ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button',
        closeDateButton: '.--close',
        successfullyAlertCloseButton: '.oxd-toast-close-container',
        
    }
return selectors
}

verificarUrlDaPaginaDoPerfil(){
    cy.location(this.selectorsList().urlField).should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7')
}
preencherNomeCompleto(firstName, middleName, lastName){
    cy.get(this.selectorsList().firstNameInfoField).clear().type(firstName)
    cy.get(this.selectorsList().middleNameInfoField).clear().type(middleName)
    cy.get(this.selectorsList().lastNameInfoField).clear().type(lastName)
}
preencherDadosDocumentais(employeeId, otherId, driverLicenseNumber, licenseExpiryDate){
    cy.get(this.selectorsList().employeeIdField).clear().type(employeeId)
    cy.get(this.selectorsList().otherIdField).clear().type(otherId)
    cy.get(this.selectorsList().driverLicenseNumberField).clear().type(driverLicenseNumber)
    cy.get(this.selectorsList().licenseExpiryDateField).clear().type(licenseExpiryDate)
    cy.get(this.selectorsList().closeDateButton).click()
}
preencherDadosPessoais(birthDate){
    cy.get(this.selectorsList().nationalityField).click()
    cy.get(this.selectorsList().personalNationality).click()
    cy.get(this.selectorsList().maritalStatusField).click()
    cy.contains('Married').click()
    cy.get(this.selectorsList().dateOfBirthOption).clear().type(birthDate)
    cy.get(this.selectorsList().closeDateButton).click()
    cy.get(this.selectorsList().maleGenderOption).click()
}
clicarPrimeiroBotaoSalvar(){
    cy.get(this.selectorsList().firstSaveButton).click()
}
verificarMensagemDeSucessoPerfilSalvo(){
    cy.get(this.selectorsList().successfullyAlertCloseButton)
}


}
export default ProfilePage