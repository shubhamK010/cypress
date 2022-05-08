

describe('verify the functionalfor fixture',function(){

    
        let information;
        before(()=>{

            cy.fixture('example2.json').then((readValue)=>{
                information = readValue


            })


        })

    it('verify the functionality for fixture', function () {

        cy.log(information)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('Input[name="first_name"]').type(information[0].first_name)
        cy.get('Input[name="last_name"]').type(information[0].last_name)
        cy.get('Input[name="email"]').type(information[0].email)
        cy.get('textarea[name="message"]').type(information[0].message)
        cy.get('input[value="SUBMIT"]').click()

    })


    it('verify the functionality for fixture', function () {
        cy.log(information)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('Input[name="first_name"]').type(information[1].first_name)
        cy.get('Input[name="last_name"]').type(information[1].last_name)
        cy.get('Input[name="email"]').type(information[1].email)
        cy.get('textarea[name="message"]').type(information[1].message)
        cy.get('input[value="SUBMIT"]').click()

    })

})    




