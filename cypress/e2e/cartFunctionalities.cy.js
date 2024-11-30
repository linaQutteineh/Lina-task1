describe('cart functionalities',()=>{
    before(()=>{
        // it will execute for only one time before all test cases .
        cy.log("this is before")
    })

    beforeEach(()=>{
        // add a product to cart 
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get("#search").type("shirt"+"{enter}");
        cy.contains("a","Circe Hooded Ice Fleece").click();
        cy.wait(1000)
        cy.get(".swatch-option.text").contains("M").click();
        cy.get("[aria-label=Purple]").click()
        cy.get("#product-addtocart-button").click();
        cy.wait(3000)
    })
   
    it('Validate that the user can add product to cart', () => {
         cy.screenshot({capture:"fullPage"})
         cy.screenshot({capture:"viewport"})
        cy.screenshot({capture:"runner"})

        cy.get("[role=alert]").should("be.visible").and("contain","You added Circe Hooded Ice Fleece to your shopping cart")
        cy.get(".counter-number").should("be.visible").and("contain","1")
    });

    it('Validate that the user can delete product', () => {
       cy.get(".showcart").click();
       cy.get("[title='Remove item']").click();
       cy.get(".action-accept").click()
       cy.get(".subtitle.empty").should("contain","You have no items in your shopping cart.")
       cy.get(".counter-number").should("be.hidden") 

    });
    it('validate the user can update products from the cart',()=>{
        cy.visit("https://magento.softwaretestingboard.com/checkout/cart/");
        cy.get('cart-item-qty').clear().type('2');
        cy.get('Update Shopping Cart').click();
        cy.get('cart-item-qty').should('contain','2');
    })

    
});
    
after(()=>{
    cy.log("this is after all hook")
})

afterEach(()=>{
    cy.log("This is after Each hook")
})
