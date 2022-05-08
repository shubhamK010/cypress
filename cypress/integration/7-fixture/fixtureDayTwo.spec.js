


describe('verify the contact form', function () {
    

    // before( ()=> {
    //     cy.fixture('contactUs2').then(function (obj) {
    //         this.obj = obj
            
    //     })
    // })

    beforeEach(()=> {

        cy.fixture('contactUs2').then(function (obj) {
            cy.log(obj)
            this.obj = obj
            
        })
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

    })


    it('verify the contact us form 0', function () {
        cy.log(this.obj[0].firstName)

        //cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible')

        //*selecting the elment by text*/
        //<h2 name="contactme" class="section_header">CONTACT US</h2>

         cy.contains('CONTACT US').should('be.visible')


        //Testing the contact us form

        cy.get('input[name="first_name"]').type(this.obj[0]['firstName'])
        cy.get('input[name="last_name"]').type(this.obj[0]['lastName'])
        cy.get('input[name="email"]').type(this.obj[0]['email'])
        cy.get('textarea[name="message"]').type(this.obj[0]['comment'])
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")



    })

    it('verify the contact us form 1', function () {
        cy.log(this.obj[0].firstName)

        //cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible')

        //*selecting the elment by text*/
        //<h2 name="contactme" class="section_header">CONTACT US</h2>

         cy.contains('CONTACT US').should('be.visible')


        //Testing the contact us form

        cy.get('input[name="first_name"]').type(this.obj[1]['firstName'])
        cy.get('input[name="last_name"]').type(this.obj[1]['lastName'])
        cy.get('input[name="email"]').type(this.obj[1]['email'])
        cy.get('textarea[name="message"]').type(this.obj[1]['comment'])
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")



    })

    
})
