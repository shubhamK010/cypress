





// Scenario is written in describe block
//whenever we write describe function we get mocha word(mocha is framework)

describe('verify the login functionality',function(){


     it('check the login with valid credentials',function(){

        // every testcase should have assertion

        cy.visit('https://www.zoomin.com/sign-in?%2F')
        cy.get('input[name="email"]').type('shubhamkmb@gmail.com')
        cy.get('input[name="password"]').type('shubhamK@1234')
        cy.contains('LOG IN').click()


        //--If LOG IN Succesful==> validate the dashboard element



     })
    
     it('check login with invalid credentials',function(){

        cy.visit('https://www.zoomin.com/sign-in?%2F')
        cy.get('input[name="email"]').type('shubhamkmb@gmail.com')
        cy.get('input[name="password"]').type('shubhamK@12345')
        cy.contains('LOG IN').click()

        //For Not Successful LOG IN ===> check validation msg



     })
})









// Maximum tescases = 10

// test scenario ====> means what to test

//e.g. Test scenario --- to test the login functionality


//How to test case

//1) Check with valid credentials

//2)Check with invalid credentials
