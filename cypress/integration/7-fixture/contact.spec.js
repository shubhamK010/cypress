

// //we will learn from worst to best form
    // 1)hardcoded values----seedha element find karenge,sidha type karenge
    // 2)writing test cases multiple times
    // 3)hooks
    // 4)fixtures---four types----a)before with this keyword
    //                            b)before  without this keyword
    //                            c)fixtures in every test case
    //                            d)one fixture for multiple test case
    // 5)Best Practices







    
    
    
    // object
        let userinfo = {

            firstName:"shubham",
            lastName:"kamble",
            email:"shubhamkmb@gmail.com",
            comment:" Hello I am learning javascript"
        }

    //json--(javascript object notation)--It is datatype of javascript,used for communication
     //----------keys in it also have " " i.e. in string i.e.double inverted commas like values
    //-----------will study it in  API

     let userinfo2= {

        "firstName":"shubham2",
        "lastName":"kamble2",
        "email":"shubhamkmb@gmail.com",
        "comment":" Hello I am learning javascript"

     }



    // // there are two types retrive from object
    //    1)userinfo.firstName
    //    2)userinfo['firstName']
       
    // // for update
    // userinfo.firstName = "pravin"

    // //for add
    // userinfo.lang="marathi"

    // //for delete
    // delete userinfo.comment
    
describe('verify the contact form',function(){


    it('verify the contact us form 0',function(){

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible')
    
        //*selecting the elment by text*/
        //<h2 name="contactme" class="section_header">CONTACT US</h2>

        cy.contains('CONTACT US').should('be.visible')


        //Testing the contact us form

        cy.get('input[name="first_name"]').type('shubham')
        cy.get('input[name="last_name"]').type('kamble')
        cy.get('input[name="email"]').type('shubhamkmb@gmail.com')
        cy.get('textarea[name="message"]').type('I am new to Cypress')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")
    })

    it('verify the contact us form 1',function(){

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible')
    
        //*selecting the elment by text*/
        //<h2 name="contactme" class="section_header">CONTACT US</h2>

        cy.contains('CONTACT US').should('be.visible')


        //Testing the contact us form

        cy.get('input[name="first_name"]').type(userinfo.firstName)
        cy.get('input[name="last_name"]').type(userinfo.lastName)
        cy.get('input[name="email"]').type(userinfo.email)
        cy.get('textarea[name="message"]').type(userinfo.comment)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")
    })

    it('verify the contact us form 2',function(){

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible')
    
        //*selecting the elment by text*/
        //<h2 name="contactme" class="section_header">CONTACT US</h2>

        cy.contains('CONTACT US').should('be.visible')


        //Testing the contact us form

        cy.get('input[name="first_name"]').type(userinfo2.firstName)
        cy.get('input[name="last_name"]').type(userinfo2.lastName)
        cy.get('input[name="email"]').type(userinfo2.email)
        cy.get('textarea[name="message"]').type(userinfo2.comment)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")
    })

    it.only('verify the contact us form 3',function(){

        cy.fixture('contactus').then(function(userinfo3){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible')
    
        //*selecting the elment by text*/
        //<h2 name="contactme" class="section_header">CONTACT US</h2>

        cy.contains('CONTACT US').should('be.visible')


        //Testing the contact us form

        cy.get('input[name="first_name"]').type(userinfo3.firstName)
        cy.get('input[name="last_name"]').type(userinfo3.lastName)
        cy.get('input[name="email"]').type(userinfo3.email)
        cy.get('textarea[name="message"]').type(userinfo3.comment)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")
    })


       })
    
    
    })


