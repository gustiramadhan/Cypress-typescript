export class CartPage{
    btn_addCart = '#add-to-cart-sauce-labs-backpack'
    btn_cart = '#shopping_cart_container'
    btn_remove = '#remove-sauce-labs-backpack'

    clickAddtoCart(){
        cy.get(this.btn_addCart).click()
    }
    clickCart(){
        cy.get(this.btn_cart).click()
    }
    clickRemove(){
        cy.get(this.btn_remove).click()
    }

    
    assertCart(){
        cy.get('.title').should('be.visible')
        cy.get('.inventory_item_name').should('be.visible')
        cy.contains('Your Cart').should('contain','Your Cart')
        cy.contains('Sauce Labs Backpack').should('contain','Sauce Labs Backpack')
    } 
}