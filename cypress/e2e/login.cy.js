
/// <reference types="cypress" />
import home_page from '../support/pages/home_page';
import login_page from '../support/pages/home_page'

const { clicarBotaoLogin, validarMensagemErro, preencherEmail, validarMensagemErroLogin, preencherEmailLogin, preenchersenhaLogin, validarMensagemSucessoLogin } = require('../support/pages/login_page')

import { faker } from '@faker-js/faker';




describe('Login', () => {
    beforeEach(() => {
        home_page.AcessarPaginaLogin()
    });

    it('Login campo E-mail vazio ', () => {
        clicarBotaoLogin()
        validarMensagemErroLogin('E-mail inválido.')
    });

    it('Login campo E-mail inválido ', () => {
        preencherEmailLogin('teste@')
        clicarBotaoLogin()
        validarMensagemErroLogin('E-mail inválido.')
    });

    it('Login campo senha vazio  ', () => {
        preencherEmailLogin(faker.internet.email())
        clicarBotaoLogin()
        validarMensagemErroLogin('Senha inválida.')
    });

    it('Login campo senha inválido ', () => {
        preencherEmailLogin(faker.internet.email())
        preenchersenhaLogin('123'), {log:false}
        clicarBotaoLogin()
        validarMensagemErroLogin('Senha inválida.')
        
    });
    it('Login com suceso ', () => {
        let email = 'luizfrleal@gmail.com'
        preencherEmailLogin('luizfrleal@gmail.com')
        preenchersenhaLogin('123456')
        clicarBotaoLogin()
        validarMensagemSucessoLogin(`Olá, ${email}`)
        
    });

});