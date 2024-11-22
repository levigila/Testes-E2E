import DashboardPage from '../pages/dashboardPage';
import LoginPage from '../pages/loginPage';
import ProfilePage from '../pages/profilePage';


const Chance = require('chance');
var moment = require('moment');

const chance = new Chance();
const dashboardPage = new DashboardPage()
const loginPage = new LoginPage()
const profilePage = new ProfilePage()

describe('Orange HRM Testing', () => {
  
  it('User Profile Info Updating - Success', () => {
     loginPage.acessarPaginaInicialDeLogin();
     loginPage.realizarLoginSucesso();
     loginPage.clicarBotaoEntrar();
     dashboardPage.clicarNoBotaoDoPerfil();
     profilePage.verificarUrlDaPaginaDoPerfil();
     profilePage.preencherNomeCompleto(chance.first({gender: "male"}), chance.first({gender: "male"}), chance.last());
     profilePage.preencherDadosDocumentais(chance.ssn({ ssnFour: true }), chance.prime(), chance.ssn(), moment().format('YYYY-MM-DD'));
     profilePage.preencherDadosPessoais(moment().format('YYYY-MM-DD'));
     profilePage.clicarPrimeiroBotaoSalvar();
     profilePage.verificarMensagemDeSucessoPerfilSalvo(); // Just to verify if the successfully alert shows up
  })
})