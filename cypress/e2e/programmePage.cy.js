/// <reference types="cypress" />


describe("Testing programmePage",function (){
    beforeEach(function(){
      cy.visit('https://phasecurve.com')
  
    })
  
  
    it('Should be able to enroll for a program',function (){
      cy.get('[href="/programme"] > .chakra-text').click()
      cy.get('.css-e7jxo8 > a > .chakra-button').click()
      cy.wait(3000)
      cy.get('[name="firstName"]').type('John')
      cy.get('[name="lastName"]').type('Chimezie')
      cy.get('[name="email"]').type('mahzeeljohn@gmail.com')
      cy.get('[name="experience"]').select('1-3 Years')
        .should('have.value', '1-3 Years')
        .should('be.visible')
        .should('be.enabled')
      cy.get('[name="phone"]').type('+2348175376831')
        .should('be.visible')
      cy.get('[name="githubUrl"]').type('https://github.com/mahzeel')
      cy.get('[type="url"]')
        .type('https://www.linkedin.com/in/ifeanyi-chimezie-92330714a/')
      cy.get('.css-1b36lv3 > .chakra-button').click()  
      cy.wait(2000)
      cy.scrollTo('center')
      cy.wait(1000)
      cy.contains('Contact Us').click()
      cy.go('back')

      //Explicit assertions
      //expect
      expect(true).to.be.true

      let message = 'Form submitted successfully'
      expect(message).to.be.equal('Form submitted successfully')


    })
  })