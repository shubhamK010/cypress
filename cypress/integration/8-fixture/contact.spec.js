

describe('verify the functionality for fixture', function () {

    //objecct 

    let student = {

        first_name: "pravin",
        last_name: "shelar",
        email: "pravinshelar010@gmail.com",
        message: "welcome to cypress"

    }
    let student2 = {
        first_name: "bapurav",
        last_name: "shelar",
        email: "bapuraoshelar010@gmail.com",
        message: "welcome to cypress2"


    }







    it('verify the functionality for fixture', function () {

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('Input[name="first_name"]').type('raju')
        cy.get('Input[name="last_name"]').type('das')
        cy.get('Input[name="email"]').type('rajudas010@gmail.com')
        cy.get('textarea[name="message"]').type('Hello I am new to cypress')
        cy.get('input[value="SUBMIT"]').type('Hello I am new to cypress')

    })

    it('verify the functionality for fixture', function () {

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('Input[name="first_name"]').type(student.first_name)
        cy.get('Input[name="last_name"]').type(student.last_name)
        cy.get('Input[name="email"]').type(student.email)
        cy.get('textarea[name="message"]').type(student.message)
        cy.get('input[value="SUBMIT"]').click()

    })


    it('verify the functionality for fixture', function () {

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('Input[name="first_name"]').type(student2.first_name)
        cy.get('Input[name="last_name"]').type(student2.last_name)
        cy.get('Input[name="email"]').type(student2.email)
        cy.get('textarea[name="message"]').type(student2.message)
        cy.get('input[value="SUBMIT"]').click()

    })



    it.only('verify the functionality for fixture', function () {

        cy.fixture('example.json').then(function (file) {

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('Input[name="first_name"]').type(file.first_name)
            cy.get('Input[name="last_name"]').type(file.last_name)
            cy.get('Input[name="email"]').type(file.email)
            cy.get('textarea[name="message"]').type(file.message)
            cy.get('input[value="SUBMIT"]').click()

        })




    })



})