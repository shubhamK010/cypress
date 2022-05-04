describe('To learn traversing method',function(){

    it('nextAll',function(){
        cy.visit('https://www.lonavalacab.com/')
        cy.get('.footer_links').first().children().eq(1).nextAll().should('have.length',2)
    
    
    })
    
    })
    
    