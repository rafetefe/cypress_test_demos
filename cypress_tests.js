// cypress_tests.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test



describe('MainMenu->ReturnMainMenu', () => {
    it('Visit localhost', () => {
        cy.visit('localhost:3000');
    })
    it('Expect Game Container', () => {
        cy.get('.game-container');
    })
    it('Expect Introduction', () => {
        //cy.get('instructions-text');
    })
    it('Pass Introduction', () => {
        cy.get('button').contains("I understand").click();
    })
    it('Try Introduction Button', () => {
        cy.get('button').contains("Instructions").click();
    })
})


describe('Init Game', () => {
    it('Visit Localhost', () => {
        cy.visit('localhost:3000')
    })
    it('Pass Introduction', () => {
        cy.get('button').contains('I understand').click();
    })
    it('Click "Start Game"', () => {
        cy.get('button').contains('Start game').click();
    })
    it('Expect Countdown', () => {
        cy.get('.countdown').find("div").should('have.class', 'countdown-indicator');
    }) 
    it('Wait Countdown', () => {
        for (let i = 3; i > 0; i--) {
            if(i!=1){
                cy.get('.countdown').should('have.text', i.toString());
                cy.wait(1000);
                cy.get('.countdown').should('not.have.text', i.toString());
            }else{
                cy.get('.countdown').should('not.exist');
            }
        }
    })
})

const text = "";
describe('Play the Game', () => {
    it('Get Statement', () => {
        cy.get('.statement').should(($btn) => {
            text = $btn.text();
            cy.log(text);
        })
    })
    it('Find Statement', () => {
        //cy.get('.statement').find('div').should('have.class', '')
    })
})
