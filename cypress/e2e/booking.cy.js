import tests from "../fixtures/loginData.json"
import selectors from "../fixtures/selectors.json"
import seats from "../fixtures/seats.json"

describe("Bookong tickets", () => {
    it("Booking ticket for available film", () => {
        cy.visit("/admin");
        tests.forEach((test) => {
            cy.login(test.login, test.password)
        });
        selectors.forEach((selector) => {
            cy.get(selector.film).last().then(($el) => {
                const filmTitle = $el.text();
                cy.visit("/");
                cy.get(selector.week).last().click();
                cy.contains(filmTitle)
                .parents(selector.movie)
                .get(selector.seans)
                .click();
                seats.forEach((seats) => {
                    cy.get(selector.hall + `> :nth-child(${seats.row}) > :nth-child(${seats.seat})`).click();
                })
                cy.contains(selector.button).click();
                cy.contains(selector.bookingCode).should('be.visible');
            });
        });        
    })
})