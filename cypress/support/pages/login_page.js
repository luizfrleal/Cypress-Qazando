/// <reference types="cypress" />

//Elementos 

const elementesLogin = {
fields : {
    email: '#user', 
    senha: '#password'
}, 
buttons: {
    login: '#btnLogin'
}, 
messages: {
    error: '.invalid_input',
    sucess: '#swal2-html-container'
}

}


//Ações/metdos/funções
const preencherEmailLogin = (email)=>{
    cy.get(elementesLogin.fields.email).type(email)
}

const preenchersenhaLogin = (senha)=>{
    cy.get(elementesLogin.fields.senha).type(senha), { log: false };
}

const clicarBotaoLogin = ()=> {
    cy.get(elementesLogin.buttons.login).click()
}

const validarMensagemErroLogin = (mensagem)=> {
    cy.get(elementesLogin.messages.error)
        .should('have.text', mensagem)
}

const validarMensagemSucessoLogin = (mensagem)=> {
    cy.get(elementesLogin.messages.sucess)
        .should('have.text', mensagem)
}


module.exports = {
    preencherEmailLogin, 
    preenchersenhaLogin, 
    clicarBotaoLogin, 
    validarMensagemErroLogin, 
    validarMensagemSucessoLogin
}