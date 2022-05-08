

import  information  from '../../fixtures/example2.json'

describe('verify the functionality for fixture', function () {


    information.forEach(function(element){

        it('verify the functionality for fixture', function () {


            cy.log(information)
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('Input[name="first_name"]').type(element.first_name)
            cy.get('Input[name="last_name"]').type(element.last_name)
            cy.get('Input[name="email"]').type(element.email)
            cy.get('textarea[name="message"]').type(element.message)
            cy.get('input[value="SUBMIT"]').click()






        })

    })






})




