/// <reference types="@applitools/eyes-cypress" />

import HomePage from '../../cypress/support/PageObjects/MainPage.js';

describe("Holiday Shopping Hackathon", () => {
    let homePage

    // Opens different Applifashion App Versions via command-line
    beforeEach(() => {
        cy.visit(Cypress.env('app_version'))
        homePage=new HomePage()
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

        // Click to enable the black color filter
        homePage.getShoeColor('Black').click()

        // Clicks on filter button
        homePage.getFilter().click()

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

        //Clicks Appli Air x Night shoe without filtering
        homePage.getShoe("Appli Air x Night")

        cy.eyesCheckWindow({
            tag: "product details",
            target: 'window',
            fully: true
        });
    });
});
