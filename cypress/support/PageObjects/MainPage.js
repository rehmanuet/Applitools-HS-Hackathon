class MainPage {

    getShoeColor(color) {
        return cy.get("#colors__" + color);
    }
    getFilter() {
        return cy.get('#filterBtn');
    }
    getShoe(shoe) {

        return cy.get('.grid_item a h3').each(($el) => {
            if ($el.text() === shoe) {
                $el.click();
            }
        });

    }
    getProductGrid() {
        return cy.get('#product_grid');
    }

}
export default MainPage