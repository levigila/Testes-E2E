import DashboardPage from '../pages/dashboardPage';
import LoginPage from '../pages/loginPage';
import ProfilePage from '../pages/profilePage';

const dashboardPage = new DashboardPage()
const loginPage = new LoginPage()
  
describe('Login Tests', () => {
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
})