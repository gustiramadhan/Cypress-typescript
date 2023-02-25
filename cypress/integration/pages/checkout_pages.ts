export class CheckoutPage{
    btn_checkout = '#checkout'
    first_name = '#first-name'
    last_name = '#last-name' 
    postal_code = '#postal-code'
    btn_continue = '#continue'
    btn_finish = '#finish'
    btn_back_to_home = '#back-to-products'

    inputFirstName(first: string){
        cy.get(this.first_name).type(first)
    }
    inputLastName(last: string){
        cy.get(this.last_name).type(last) 
    }
    inputPostalCode(zip: string){
        cy.get(this.postal_code).type(zip)
    }
    clickCheckout(){
        cy.get(this.btn_checkout).click()
    }
    clickContinue(){
        cy.get(this.btn_continue).click()
    }
    clickFinish(){
        cy.get(this.btn_finish).click()
    }
    clickBackToHome(){
        cy.get(this.btn_back_to_home).click()
    }

    assertCheckoutComplete(){
        cy.get('.complete-header').should('be.visible')
        cy.get('.pony_express').should('be.visible')
        cy.contains('THANK YOU FOR YOUR ORDER').should('contain','THANK YOU FOR YOUR ORDER')
    }

    assertYourInformationFail(){
        cy.get('[data-test="error"]').should('be.visible')
        cy.contains('Error: Postal Code is required').should('contain','Error: Postal Code is required')
    }

    checkout(first : string,last : string,zip : string){
        this.inputFirstName(first)
        this.inputLastName(last)
        this.inputPostalCode(zip)      
    }

    checkoutFailed(first: string, last: string){
        this.inputFirstName(first)
        this.inputLastName(last)     
    }

}