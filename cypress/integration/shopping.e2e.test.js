/// <reference types="cypress" />


describe("Holiday Shopping Hackathon", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('app_version'))
    })
    afterEach(() => {
        cy.eyesClose()
    })

    it(`Task 1 - Main Page `, function() {


        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Test 1'
        })

        cy.eyesCheckWindow({
            tag: "main page",
            target: 'window',
            fully: true
        });

    });

    it(`Task 2 - Filtered Product Grid `, function() {

        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Test 2'
        })
        cy.get('#colors__Black').click()
        cy.get('#filterBtn').click()


        cy.eyesCheckWindow({
            tag: "filter by color",
            target: 'region',
            selector: '#product_grid'
        });

    });

    it(`Task 3 - Product Details`, function() {


        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Task 3'
        })

        cy.get('#IMG__imgfluid__215').click()
        cy.eyesCheckWindow({
            tag: "product details",
            target: 'window',
            fully: true
        });
    });
});