describe('suninjuly.github.io', ()=> {
    it('Solve math like a robot', () => {
        cy.visit('http://suninjuly.github.io/math.html')
        cy.get('#input_value').then(el => {
            let inputValue = parseInt(el.text())
            let resultValue = Math.log(Math.abs(12*Math.sin(inputValue)));
            cy.get('#answer').type(resultValue.toString())
        })
        cy.get('[for="robotCheckbox"]').click()
        cy.get('[for="robotsRule"]').click()
        cy.get('.btn').click()
    })
})
