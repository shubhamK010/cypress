


describe('verify the functionalfor fixture', function () {


    let information;
    before(() => {

        cy.fixture('example2.json').then((readValue) => {
            information = readValue


        })


    })

    it('verify the functionality for fixture', function () {

        information.forEach(element => {
            cy.log(information)
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('Input[name="first_name"]').type(element.first_name)
            cy.get('Input[name="last_name"]').type(element.last_name)
            cy.get('Input[name="email"]').type(element.email)
            cy.get('textarea[name="message"]').type(element.message)
            cy.get('input[value="SUBMIT"]').click()


        });



    })




})




