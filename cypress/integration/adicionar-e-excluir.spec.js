/// <reference types="cypress" />

describe('Teste adição e exclusão de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Teste adicionando contato', () => {
        cy.get('input[placeholder="Nome"]').type('Hal Nascimento')
        cy.get('input[placeholder="E-mail"]').type('halnascimento@gmail.com')
        cy.get('input[placeholder="Telefone"]').type('(99) 92222-3333')
        cy.get('.contato').then(contatos => {
            const tamanhoInicial = contatos.length
            cy.get('.adicionar').click()
            cy.get('.contato').should('have.length', tamanhoInicial + 1)
        })
    })
    
    it('Teste deletando contato', () => {
            cy.get('.contato').then(contatos => {
            const tamanhoFinal = contatos.length
            cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
            cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', tamanhoFinal - 1)
        })
    })
})
