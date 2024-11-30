describe('cart Review',()=>{
    it('that the user can review the product', () => {
        
    
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get("[title='Radiant Tee']").click();
    cy.get("#tab-label-reviews-title").click(); 
    cy.get("#Rating_1_label").click();
    cy.get("#Rating_2_label").click();
    cy.contains("span","Nickname").should("be.visible");
    cy.contains("span","Summary").should("be.visible");
    cy.contains("span","Review").should("be.visible");
    cy.get("#nickname_field").type('Lina');
    cy.get("#summary_field").type('too small ');
    cy.get("#review_field").type('its not true to size');
    cy.get("button").contains("Submit Review").should("be.visible");
    cy.contains("button","Submit Review").click();
    cy.get("[role=alert]").should("be.visible").and("contain", "You submitted your review for moderation.")
 });

})