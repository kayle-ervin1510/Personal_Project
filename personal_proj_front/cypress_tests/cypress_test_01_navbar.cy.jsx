describe("Test 1", () => {
    // put instructions for cypress test to make a user to test function
    it("will test the structure of the navbar", () => {
        cy.visit("/home");
        cy.get("nav").should("exist");
        cy.get("nav h1").should("have.text", "Navigation Bar")

        cy.get("nav a")
        .eq(1) // index-1
        .should("have.text", "My List")
        .should("have.attr", "href", "/list")

        cy.get("nav input").should("have.atrr", "placeholder", "Try '308'");

        cy.get("nav button").should("have.text", "Search!");
    });
});