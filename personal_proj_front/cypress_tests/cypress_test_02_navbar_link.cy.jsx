describe("Test 2", () =>{
    it("can navigate to List Page, then back to Home Page", ()=>{
        cy.visit("/home");
        cy.get("[href='/list']").click();

        cy.location().should((location) =>{
            expect(location.pathname).to.equal("/list");
        });

        cy.get("[href='/home']").click();

        cy.location().should((location) => {
            expect(location.pathname).to.equal("/home");
        });
    });
})