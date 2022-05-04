describe('To check tranverse method',function(){

    it("To get a DOM element at a specific index, use the .eq() command.",function(){
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().eq(3).should('contain','Skincare')
    })
    it("To get the first DOM element within elements, use the .first() command.",function(){
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().first().should('contain','Home')
    })
it("To get the last DOM element within elements use the .last() command.",function(){
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().last().should('contain','Books')
})
it('To get the next sibling DOM element within elements, use the .next() command',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=49"]').should('contain','Fragrance')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=49"]').parent().next().should('contain','Men')

})
it('To get the previous sibling DOM element within elements, use the .pre() command',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=49"]').parent().prev().as('prevalias')

        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=49"]').parent().prev().should('contain','Skincare')
        cy.get('@prevalias').should('contain','Skincare')
    
})
it('To get the all sibling DOM element within elements, use the .siblings() command',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').parent().siblings().should('have.length',7)
})


it('to get dom element that match a specific selector use the .filter() command',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().find('a').as('alias')
        cy.get('.nav-pills').children().find('a').should('have.length',37)
        cy.get('@alias').filter('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').should('contain','Makeup')
})

it('descendant element of the selector use.find()command',()=>{
        cy.visit('https://automationteststore.com/')
cy.get('.nav-pills').children().eq(7).find("a[href='https://automationteststore.com/index.php?rt=product/category&path=65_67']").should('contain','Paperback')
})


 it('to remove dom element from the set of element use.not() command',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.info_links_footer').children().find('a').not('a[href="https://automationteststore.com/index.php?rt=account/login"]').should('have.length',6)
 })


 it('to get parent element of elements use.parent() command',()=>{
        cy.visit('https://automationteststore.com/')
cy.get('a[class="active menu_home"]').parent().should('contain','Home')
 })


it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.info_links_footer>li:nth-child(7)').prevUntil('.info_links_footer>li:nth-child(2)').should('have.length','4')

})


it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',()=>{
        cy.visit('https://automationteststore.com/')
cy.get('#maincontainer > div > div > section:nth-child(1) > section > div:nth-child(1)').nextUntil('#maincontainer > div > div > section:nth-child(1) > section > div:nth-child(4)').should('have.length','2')
})
})