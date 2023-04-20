/// <reference types="cypress" />


describe("Testing LandingPage",function (){
  beforeEach(function(){
    cy.visit('https://phasecurve.com')

  })

  it.skip("Should launch url and navigate to landingpage",function (){ 
    cy.get('[href="/about"] > .chakra-text').click()
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
    cy.get('[id="field-:r6:"]').type('https://www.linkedin.com/in/ifeanyi-chimezie-92330714a/')

  })
})