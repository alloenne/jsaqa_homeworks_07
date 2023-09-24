import tests from "../../fixtures/loginData.json"


describe("Testing authorization", () => {

    beforeEach(() => {
        cy.visit("/admin")
    });

    

    it("Failed authorization with wrong email", () => {
        tests.forEach((test) => {
            cy.login(test.wrongemail, test.password);
            cy.contains("Ошибка авторизации!").should("be.visible");
        });        
    });


   

   

})
