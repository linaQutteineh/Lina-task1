describe('cart updates',()=>{
    it('validate the user can update products from the cart', () => {
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get("#search").type("shirt"+"{enter}");
        cy.contains("a","Circe Hooded Ice Fleece").click();
        cy.wait(1000)
        cy.get(".swatch-option.text").contains("M").click();
        cy.get("[aria-label=Purple]").click()
        cy.get("#product-addtocart-button").click();
        cy.wait(3000)
        cy.get("[role=alert]").should("be.visible").and("contain","You added Circe Hooded Ice Fleece to your shopping cart")
        cy.get(".counter-number").should("be.visible").and("contain","1")
        cy.get(".counter-number").click();
        cy.visit("https://magento.softwaretestingboard.com/checkout/cart/");
        cy.get("[data-role=cart-item-qty]").clear().type('2');
        cy.get("[title='Edit item parameters']").click()
        cy.get(".swatch-option.text").contains("XS").click();
        cy.get("[aria-label=Green]").click();
        cy.get("#qty").clear().type('2');
        cy.get("[title='Update Cart']").click()
        cy.get("[role=alert]").should("be.visible").and("contain","Circe Hooded Ice Fleece was updated in your shopping cart");

    });
        
   });


