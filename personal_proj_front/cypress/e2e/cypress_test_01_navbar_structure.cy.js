describe("Test 1", () => {
    beforeEach(() => {
        cy.request('POST', '/api/v1/users/create/', {
      email: "testytester@test.com",
      password: "testtesttest"
    })
    cy.visit('/home')
  })
    it("will test the structure of the navbar", () => {
        cy.visit("http://localhost:5173");
        cy.get("nav").should("exist");
        cy.get("nav h3").should("have.text", "Navigation Bar")

        cy.get("nav input").should("have.attr", "placeholder", "Try 308");

        cy.get("nav button").should("have.text", "Search!");
    });
});