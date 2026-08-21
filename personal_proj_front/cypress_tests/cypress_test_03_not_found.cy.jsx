describe("Test 3", ()=>{
    it("will test that you go to a unique error page on a bad search input", ()=>{
        cy.visit("/home");

        cy.get("nav input").type("Cat");

        cy.get("nav button").click();

        cy.get("nav").should("exist");

        cy.get("#root div").should(
            "have.text",
            "No such HTTP Cat with id of 'Cat' exists."
        );
    });
});