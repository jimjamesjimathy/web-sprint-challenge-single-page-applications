

describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    // Helpers
    const textInput = () => cy.get('input[name=name]');
    const pepperoni = () => cy.get('input[name=pepperoni]');
    const chicken = () => cy.get('input[name=chicken]');
    const bananaPepper = () => cy.get('input[name=bananaPepper]');
    const specialInstructions = () => cy.get('textarea[name=spec]');
    const submitBtn = () => cy.get('button[name=order-button]');

    describe('MVP tests', () => {
        it('can add text, and select multiple toppings', () => {
            textInput()
                .should('have.value', '')
                .type('Ricky')
                .should('have.value', 'Ricky');

            pepperoni().check();
            chicken().check();
            bananaPepper().check();
            
            specialInstructions()
                .should('have.value', '')
                .type('Can you put a crazy amount of horse raddish on top?')
                .should('have.value', 'Can you put a crazy amount of horse raddish on top?');
        })
    })
    describe('MVP tests pt.2', () => {
        it('should submit', () => {
            textInput()
                .should('have.value', '')
                .type('Ricky')
                .should('have.value', 'Ricky');
            pepperoni().check();
            chicken().check();
            bananaPepper().check();
            
            submitBtn().click();
        })
    })
})




// #### Testing MVP

// Implement the following tests in Cypress:

// - [ ] test that you can add text to the box
// - [ ] test that you can select multiple toppings
// - [ ] test that you can submit the form