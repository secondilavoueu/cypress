describe('Teste Caso 2', () => {
    it('Fluxo de Compra', () => {
      cy.visit('https://www.asaas.com/c/oyfqgpm2hjwk1uk4')
      cy.contains('COMPRAR').click()
      //cy.contains('Nome completo').type('João da Silva')
     cy.get('#name').type('João da Silva')
     cy.get('#cpfCnpj').type('77339154493')
     cy.get('#mobilePhone').type('71992253555')
     cy.get('#email').type('joaodasilva@gmail.com')
      // cep -> cy.get('#js-note-loading-message loading-postal-code').type('407171120')
      // rua -> cy.get('#js-note-loading-message loading-postal-code').type('407171120')
        // numero -> cy.get('#js-note-loading-message loading-postal-code').type('407171120')
        // complemento -> cy.get('#js-note-loading-message loading-postal-code').type('407171120')
        // bairro -> cy.get('#js-note-loading-message loading-postal-code').type('407171120')
        //cy.contains('Gerar Boleto').click()
    })
  })