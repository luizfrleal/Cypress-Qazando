/// <reference types="cypress" />


//Elementos 
const elementes = {
    buttons: {
        register: '#btnRegister'
    }
    ,

    fields: {
        name: '#user',
        email: '#email',
        password: '#password'

    },
    menssages: {
        error: '#errorMessageFirstName',
        success: '#swal2-html-container'

    }
}



//Ações/metdos/funções

const clicarBtnRegistrar = () => {
    cy.get(elementes.buttons.register).click()

}


const validarmensagemerro = (mensagemDeErro) => {
    cy.get(elementes.menssages.error)
        .should('have.text', mensagemDeErro)

}

const preencherNome = (nome) => {
    cy.get(elementes.fields.name)
        .type(nome)

}
const preencherEmail = (email) => {
    cy.get(elementes.fields.email).type(email)

}
const preencherSenha = (senha) => {
    cy.get(elementes.fields.password).type(senha)

}
const checagemCadastroSucesso = (mensagem) => {
    cy.get(elementes.menssages.success)
        .then((element) => {
            expect(element.text()).equal(mensagem)

        })

}



module.exports = {
    clicarBtnRegistrar,
    validarmensagemerro,
    preencherNome,
    preencherEmail,
    preencherSenha,
    checagemCadastroSucesso

}