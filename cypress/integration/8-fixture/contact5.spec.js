



describe('verify the functionalfor fixture', function () {


    beforeEach(function(){

        cy.fixture('example').then((information)=>{
            this.information=information
            cy.log(this.information)
        })


    })

    it('verify the functionality for fixture', function () {
        cy.log(this.information)

       
            
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('Input[name="first_name"]').type(this.information.first_name)
            cy.get('Input[name="last_name"]').type(this.information.last_name)
            cy.get('Input[name="email"]').type(this.information.email)
            cy.get('textarea[name="message"]').type(this.information.message)
            cy.get('input[value="SUBMIT"]').click()


      



    })




})




