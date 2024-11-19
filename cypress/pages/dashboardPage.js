class DashboardPage {

        selectorsList() {
            const selectors = {
                dashboardBackground: '.orangehrm-dashboard-grid',
                infoSideButton: '#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(6) > a > svg',
                urlField: 'pathname',     
            }
        return selectors
        }
    
checarDashBoardPage() {
    cy.location(this.selectorsList().urlField).should('equal', '/web/index.php/dashboard/index')
    cy.get(this.selectorsList().dashboardBackground)
}
clicarNoBotaoDoPerfil(){
    cy.get(this.selectorsList().infoSideButton).should('be.visible').click()
}

}
export default DashboardPage;