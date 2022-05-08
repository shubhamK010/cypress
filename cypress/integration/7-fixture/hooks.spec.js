


describe('hooks concept in cypress', function () {
    before(function () {
        cy.log('before block executed') //1
    })

    beforeEach(function () {
        cy.log('beforeEach it block executed') //2 //2B
    })

    it('Testcase One', function () {
        cy.log('Testcase one executed') //3
    })

    it('Testcase Two', function () {
        cy.log('Testcase two executed') // 5
    })

    afterEach(function () {
        cy.log('afterEach block executed') //4 //4B
    })

    after(function () {
        cy.log('after block executed') //6
    })



})














