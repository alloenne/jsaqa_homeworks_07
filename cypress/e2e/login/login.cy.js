import tests from "../../fixtures/loginData.json"
import selectors from "../../fixtures/selectors.json"

describe("Testing authorization", () => {

    beforeEach(() => {
        cy.visit("/admin")
    });

    it("Successful authorization", () => {
        tests.forEach((test) => {
            cy.login(test.login, test.password);
            cy.contains("Управление залами").should("be.visible");
        });        
    });

    it("Failed authorization with wrong password", () => {
        tests.forEach((test) => {
            cy.login(test.login, test.wrongpassword);
            cy.contains("Ошибка авторизации!").should("be.visible");
        });        
    });

    it("Empty login", () => {
        tests.forEach((test) => {
            cy.login(null, test.password);
        });
        selectors.forEach((selector) => {
            cy.validation(selector.email);
            cy.validationMessage(selector.email, "Заполните это поле.")
        });
    });

    it("Empty password", () => {
        tests.forEach((test) => {
            cy.login(test.login, null);
        });
        selectors.forEach((selector) => {
            cy.validation(selector.password);
            cy.validationMessage(selector.password, "Заполните это поле.")
        });
    }); 

   

})
