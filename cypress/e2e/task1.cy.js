describe('task1',()=>{
    it('task1',()=>{
        cy.visit("https://demo.productionready.io/#/register");
        cy.contains("h1","Sign up")
        cy.contains("Have an account?");
        cy.contains("conduit");
        cy.get("[href='#/']").eq(1);
        cy.get("[placeholder=Username]").type("Lina");
        cy.get("[placeholder=Email]").type("linaqutteineh94@gmail.com");
        cy.get("[placeholder=Password]").type("123456");
        cy.get("[type=submit]").click();
        cy.get("[href='#/']").last();
        cy.contains("© 2024. An interactive learning project from ");
        cy.get("[href='https://thinkster.io']");
        cy.contains(". Code licensed under MIT. ");

        
    })
})