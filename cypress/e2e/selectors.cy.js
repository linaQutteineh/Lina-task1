describe('Selectors',()=>{
    it('Selectors-examples',()=>{
cy.visit("https://www.telerik.com/support/demos");
//cy.get("h1").contains("Demos");
//cy.get('li.TK-footer-List-Item').eq(6)
cy.get(".TK--Footer-Desktop .TK-Footer-List-Social").children();
    });
})