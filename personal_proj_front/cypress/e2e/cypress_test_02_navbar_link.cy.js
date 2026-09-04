describe("Test 2", () =>{
       beforeEach(() => {
        cy.request ({
            method: 'POST',
            url: '/api/v1/users/create/',
            body: { email: 'testytester@test.com', password: 'testtesttest'},
            failOnStatusCode: false
        })
        cy.request('POST', '/api/v1/users/login/', {
            email: 'testytester@test.com',
            password: 'testtesttest'
        })
        cy.visit('/home')
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
