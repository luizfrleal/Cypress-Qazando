/// <reference types="cypress" />



export default {
    AcessarPaginaCadastro() {
        cy.visit('/')
        cy.get('.right_list_fix')
            .contains('Cadastro').click()
        }, 

        AcessarPaginaLogin()  {
            cy.visit('/')
            cy.get('.fa.fa-user')
                .click()


        }
    

    }


/*module.exports = {
    AcessarPaginaCadastro
}*/