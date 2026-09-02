describe("Test 2", () =>{
    beforeEach(() => {
        cy.visit('http://localhost:5173')
    })

    it("can navigate to List Page, then back to Home Page", ()=>{
        cy.get('.action-email').type('fake@email.com')
        // cy.visit("http://localhost:5173");
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