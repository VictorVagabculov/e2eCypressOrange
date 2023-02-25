/// <reference types="Cypress" />

describe ('Pruebas de validacion pagina de inicio', function (){
    beforeEach(() => {
        // runs before each test in the block
        cy.visit("https://opensource-demo.orangehrmlive.com/")

      })


    it ('Validacion de logo superior', function (){
      cy.get('#divLogo > img').should('be.visible') 
    })

  it ('Validacion campo username existe', function (){
    cy.get('#txtUsername').should('be.visible')
  })
  it ('Validacion del texto del footer', function (){
    cy.get('#footer').contains('OrangeHRM')
  })
  it ('Validacion del boton login es visible', function (){
    cy.get('#btnLogin').should('be.visible')
  })
       
})

    
describe ('Pruebas de validacion funcion adicionar usuario', function (){
   
  it('Prueba E2E para adicionar un usuario', function (){
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get('#btnAdd').click()
    cy.get('#systemUser_employeeName_empName').type("Alex Nikol")
    //generacion de un numero aleatorio para crear siempre un usuario distinto y omitir validacion de duplicados
    let rndnum = Math.random() *2;
    cy.get('#systemUser_userName').type("Alex0"+rndnum.toString())
    cy.get('#systemUser_password').type("Alex1234")
    cy.get('#systemUser_confirmPassword').type("Alex1234")
    cy.get('#btnSave').click()
    cy.get('#successBodyEdit').should('contain.text','Successfully Saved')
  })

     //en proceso
})