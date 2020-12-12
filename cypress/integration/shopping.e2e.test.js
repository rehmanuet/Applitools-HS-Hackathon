/// <reference types="@applitools/eyes-cypress" />

describe("Holiday Shopping Hackathon", () => {

    // Opens different Applifashion App Versions via command-line
    beforeEach(() => {
        cy.visit(Cypress.env('app_version'))
    })

    // Closes the eyes instance after each test
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

        // Checks nable to black color filter
        cy.get('#colors__Black').click()

        // Clicks on filter button
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

        //Opens Appli Air x Night shoe without filtering
        cy.get('#IMG__imgfluid__215').click()

        cy.eyesCheckWindow({
            tag: "product details",
            target: 'window',
            fully: true
        });
    });
});