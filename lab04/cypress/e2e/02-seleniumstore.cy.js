describe("demo-store.seleniumacademy.com", ()=> {
    it("visit all pages", ()=> {
        cy.visit("http://demo-store.seleniumacademy.com/")
        cy.get("a").each(el => {
            cy.request({
                url: el.prop("href"),
                failOnStatusCode: false
            })
            .then(response => {
                expect(response.status).to.equal(200)
            })
        })
    })

    it("sign up", ()=> {
        cy.visit('http://demo-store.seleniumacademy.com/')
        cy.get('.skip-account').click()
        cy.get('#header-account').get('a[title=Register]').click()
        cy.get('#firstname').type('John')
        cy.get('#middlename').type('E')
        cy.get('#lastname').type('Johansson')
        cy.get('#email_address').type("aeaea2172@mail2172.com")
        cy.get('#password').type('Testpassword1!')
        cy.get('#confirmation').type('Testpassword1!')
        cy.get('.buttons-set button[type=submit]').click()
    })

    it("add product to cart", ()=> {
        cy.visit('http://demo-store.seleniumacademy.com/')
        cy.get('.product-image').first().click()
        cy.get('.option-white').click()
        cy.get('.option-l').click()
        cy.get('.add-to-cart-buttons button').click()
        cy.get('.success-msg').should('contain.text', 'added to your shopping cart')
    })
})
