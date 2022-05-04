

describe('traverse method in cypress',function(){

    it('To get the first DOM element within elements, use the .first() command',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills.categorymenu').children().first().should('contain',"Home")
      

    })

    it('To get the last DOM element within elements, use the .last() command',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills.categorymenu').children().last().should('contain',"Books")
    })

    it('To get children of DOM elements, use the .children() command',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills.categorymenu').children().should('have.length',8)


    })

    it.only('To get a DOM element at a specific index, use the .eq() command',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().eq(3).should('contain','Skincare')

    })

 

    it('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills.categorymenu').children().find('a').filter('.active.menu_home').should('contain','Home')  
      
    })

    it('To get descendant DOM elements of the selector, use the .find() command.',function(){
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills.categorymenu').children().find('a').should('contain'," Hair Care")
      
      
    })

})
   // methods learnt till now
    //first()==> to get first element
    // last()===> to get last element 
    //eq()===>to get element by index
    //children()===>to get all elemnets
    //find()======> to find the element under parent


// Sibling Methods

//next()

it('To get the next sibling DOM element within elements, use the .next() command',function(){
    cy.visit('https://automationteststore.com/')
    cy.get('#tea').next().should('have.text','Milk')
})

it('To get the previous sibling DOM element within elements, use the .prev() command',function(){
    cy.visit('https://automationteststore.com/')
    cy.get('#tea').prev().should('have.text','Coffee')
})


it('To get all of the next sibling DOM elements within elements, use the .nextAll() command',function(){
    cy.visit('https://automationteststore.com/')
    cy.get('#tea').nextAll().should('have.length',3)
    cy.get('#tea').nextAll().eq(2).should('have.id','sugar')
})


it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
    cy.visit('https://automationteststore.com/')
    cy.get('#sugar').prevAll().should('have.length',4)
    cy.get('#sugar').prevAll().eq(2).should('have.id','tea')

})

it('To get all previous sibling DOM elements within elements, use the .prevAll() command',function(){
    cy.visit('https://automationteststore.com/')
    cy.get('#sugar').prevAll().should('have.length',4)
    cy.get('#sugar').prevAll().eq(2).should('have.id','tea')
    
})

it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command',function(){
    cy.visit('https://automationteststore.com/')
    cy.get('#sugar').prevUntil('#tea').should('have.length',2)
    cy.get('#sugar').prevUntil('#tea').eq(1).should('have.id','milk')
    
})

it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command',function(){
    cy.visit('https://automationteststore.com/')
    cy.get('#tea').nextUntil('#sugar').should('have.length',2)
    cy.get('#tea').nextUntil().eq(1).should('have.id','espresso')
    
})


it('To get all sibling DOM elements of elements, use the .siblings() command. command',function(){
    cy.visit('https://automationteststore.com/')
    cy.get('#tea').siblings().should('have.length',4)
    
})

it('To remove DOM element(s) from the set of elements, use the .not() command',function(){
    cy.visit('https://automationteststore.com/')
    cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)
    
})
it('To get the closest ancestor DOM element, use the .closest() command',function(){
    cy.visit('https://automationteststore.com/')
    cy.contains('Home').closest('nav').should('have.attr','aria-label','breadcrumb')
    
})
//parent method gives single element as parent
it('To get parent DOM element of elements, use the .parent() command',function(){
    cy.visit('https://automationteststore.com/')
    cy.get('#milk').parent().should('have.class','traversal-drinks-list')
    
})

// you can find single element by searching from any parent present
it('To get parents DOM element of elements, use the .parents() command',function(){
    cy.visit('https://automationteststore.com/')
    cy.get('#milk').parents().should('have.class','thumbnail').should('be.visible')
    
})
//to find how many elements present between two parents
it('To get parents DOM element of elements until other element, use the .parentsUntil() command',function(){
    cy.visit('https://automationteststore.com/')
    cy.get('#milk').parentsUntil('[class="thumbnail"]').should('have.length',1)
    
})
// same method but another example
it('To get parents DOM element of elements until other element, use the .parentsUntil() command',function(){
    cy.visit('https://automationteststore.com/')
    cy.get('#milk').parentsUntil('[class="col-sm-12"]').should('have.length',2)
    
})

























































