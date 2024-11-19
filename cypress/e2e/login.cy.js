import userData from '../fixtures/users/userData.json';
import DashboardPage from '../pages/dashboardPage';
import LoginPage from '../pages/loginPage';
import ProfilePage from '../pages/profilePage';

const dashboardPage = new DashboardPage()
const loginPage = new LoginPage()
const profilePage = new ProfilePage()
  
describe('Orange HRM Testing', () => {
  it('Login - Sucess', () => {
    loginPage.acessarPaginaInicialDeLogin();
    loginPage.realizarLoginSucesso();
    loginPage.clicarBotaoEntrar();
    dashboardPage.checarDashBoardPage();
  })
  it('Login - Fail', () => {
    loginPage.acessarPaginaInicialDeLogin();
    loginPage.realizarLoginFalha();
    loginPage.clicarBotaoEntrar();
    
  })
  it('User Info Updating - Success', () => {
     loginPage.acessarPaginaInicialDeLogin();
     loginPage.realizarLoginSucesso();
     loginPage.clicarBotaoEntrar();
     dashboardPage.clicarNoBotaoDoPerfil();
     profilePage.verificarUrlDaPaginaDoPerfil();
     profilePage.preencherNomeCompleto();
     profilePage.preencherDadosDocumentais();
     profilePage.preencherDadosPessoais();
     profilePage.clicarBotaoSalvar();
     profilePage.verificarMensagemDeSucessoPerfilSalvo(); // Just to verify if the successfully alert shows up
  })
})