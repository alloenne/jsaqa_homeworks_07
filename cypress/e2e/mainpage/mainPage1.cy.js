import selectors from "../../fixtures/selectors.json"

describe("Main page is visible", () => {
    it("page visible", () => {
        selectors.forEach((selector) => {
            cy.visit("/")
            cy.get(selector.title).should('be.visible');
            cy.get(selector.movieTitle).should("have.length", 3);  
        });        
    });
})

