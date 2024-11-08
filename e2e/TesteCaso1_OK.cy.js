describe('Teste Caso 1  -', () => {
    it('Compra redirecionada para ASAAS', () => {
      cy.visit('https://localhost:7265/')
      cy.contains('Lojas').click()
      cy.get('body > div > main > div > section > div > div:nth-child(1) > a > img').click()
      cy.get('body > div > main > section > div > div:nth-child(2) > a > img').click()
      cy.contains('Comprar').click()
    })
  })