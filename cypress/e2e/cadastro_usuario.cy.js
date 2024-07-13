/// <reference types="cypress" />

const { assert, should } = require("chai");
//const user_data = require('../fixtures/desafio.json')
import home_page from '../support/pages/home_page'
//const { AcessarPaginaCadastro } = require('../support/page/home_page')
const { 
    clicarBtnRegistrar, 
    validarmensagemerro, 
    preencherNome, 
    preencherEmail, 
    preencherSenha,
    checagemCadastroSucesso } = require('../support/pages/register_page')
    
import { faker } from '@faker-js/faker';

const devices = [
   
    'desktop',
    'samsung-s10',	
   // 'macbook-15',	
    'iphone-xr',	
    //'ipad-2',
    //'iphone-x'
    
]

devices.forEach(element => {
        
    

describe('Valida Cadastro de Usuário', () => {

    beforeEach("Visitar a pagina inicial e clicar em cadastro", () => {
     home_page.AcessarPaginaCadastro()
     if (element!= 'desktop') {
        cy.viewport(element)
        
     }

    });

    it('Tentativa de cadastro com o campo nome vazio ', () => {

        clicarBtnRegistrar()
        validarmensagemerro('O campo nome deve ser prenchido')
        

    });


    it('Tentativa de cadastro com o campo E-mail vazio ', () => {

        preencherNome(faker.person.fullName())
        clicarBtnRegistrar()
        validarmensagemerro('O campo e-mail deve ser prenchido corretamente')
    });


    it('Tentativa de cadastro com o campo senha vazio ', () => {

        preencherNome(faker.person.fullName())
        preencherEmail(faker.internet.email())
        clicarBtnRegistrar()
        validarmensagemerro('O campo senha deve ter pelo menos 6 dígitos')

    });


    it('Tentativa de cadastro com o campo senha inválido - de 6 digitos ', () => {

        preencherNome(faker.person.fullName())
        preencherEmail(faker.internet.email())
        preencherSenha(123)
        clicarBtnRegistrar()
        validarmensagemerro('O campo senha deve ter pelo menos 6 dígitos')
    });


    it('Efetuar cadastro com sucesso', () => {

        const name = faker.person.fullName()

        preencherNome(name)
        preencherEmail(faker.internet.email())
        preencherSenha(123456)
        clicarBtnRegistrar()
        checagemCadastroSucesso(`Bem-vindo ${name}`)
                    
            })

    });
});