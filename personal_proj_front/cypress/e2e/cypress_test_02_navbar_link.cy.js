describe("Test 2", () =>{
    beforeEach(() => {
        cy.visit('http://localhost:5173')
    })

    it("can navigate to List Page, then back to Home Page", ()=>{
        // I want to sign up/sign in as a user
        // test navbar links
        cy.get("nav").should("exist");
        cy.visit('/home')
        // cy.get('email').type('fake@email.com')
        // cy.visit('/home')
        
        // cy.get("[href='/list']").click();

        // cy.location().should((location) =>{
        //     expect(location.pathname).to.equal("/list");
        // });

        // cy.get("[href='/home']").click();

        // cy.location().should((location) => {
        //     expect(location.pathname).to.equal("/home");
        // });
    });
})
