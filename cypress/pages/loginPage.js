import userData from '../fixtures/users/userData.json';
class LoginPage {

selectorsList(){
    const selectors = {
    usernameField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    passwordField: ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',
    submitButton: '.oxd-button',
    errorAlert: "[role='alert']",

    }
    return selectors
}

    realizarLoginSucesso() {
        cy.get(this.selectorsList().usernameField).type(userData.usernameSuccess)
        cy.get(this.selectorsList().passwordField).type(userData.passwordSuccess)
    }
    realizarLoginFalha(){
        cy.get(this.selectorsList().usernameField).type(userData.usernameFail)
        cy.get(this.selectorsList().passwordField).type(userData.passwordFail)
    }
    clicarBotaoEntrar(){
        cy.get(this.selectorsList().submitButton).click()
    }
    checarAparecimentoMensagemErroLogin() {
        cy.get(this.selectorsList().errorAlert)
    }
    acessarPaginaInicialDeLogin(){
        cy.visit('auth/login')
    }
}
export default LoginPage;