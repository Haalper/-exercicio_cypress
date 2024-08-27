/// <reference types="cypress" />

describe('Teste de função botões da lista de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
    })

    after(() => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[placeholder="Nome"]').clear().type('Luis Diaz')
        cy.get('input[placeholder="E-mail"]').clear().type('Luiz@gmail.com.br')
        cy.get('input[placeholder="Telefone"]').clear().type('(85) 12356789')
        cy.get('.alterar').click()
    })

    it('Teste Edição', () => {
        cy.get('input[placeholder="Nome"]').should('have.value', 'Luis Diaz')
        cy.get('input[placeholder="E-mail"]').should('have.value', 'Luiz@gmail.com.br')
        cy.get('input[placeholder="Telefone"]').should('have.value', '(85) 12356789')

    })
    it('Teste Salvar', () => {
        cy.get('input[placeholder="Nome"]').clear().type('Antonio Silva')
        cy.get('input[placeholder="E-mail"]').clear().type('silva@gmail.com.br')
        cy.get('input[placeholder="Telefone"]').clear().type('(85) 12356789')
        cy.get('.alterar').click()
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('contain', 'Antonio Silva')
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)').should('contain', '(85) 12356789')
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)').should('contain', 'silva@gmail.com.br')
    })

    it('Teste Cancel', () => {
        cy.get('.cancelar').click()
        cy.get('input[placeholder="Nome"]').should('have.value', '').clear()
        cy.get('input[placeholder="E-mail"]').should('have.value', '').clear()
        cy.get('input[placeholder="Telefone"]').should('have.value', '').clear()
    })
})

