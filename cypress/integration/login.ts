import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {CartPage} from "./pages/cart_pages"
import {CheckoutPage} from "./pages/checkout_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()
let checkoutPage = new CheckoutPage()


const URL = 'https://www.saucedemo.com/'

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})


it('Success Checkout Products', () => {

    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack()
    cartPage.clickAddtoCart()
    cartPage.clickCart()
    cartPage.assertCart()
    cy.wait(2000)
    checkoutPage.clickCheckout()
    checkoutPage.checkout('Gusti', 'Ramadhan', '11653')
    cy.wait(2000)
    checkoutPage.clickContinue()
    checkoutPage.clickFinish()
    checkoutPage.assertCheckoutComplete()
    cy.wait(2000)
    checkoutPage.clickBackToHome()
})

it('Failed Checkout Products', () => {

    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    cy.viewport(1537, 976)
    dashboardPage.sauceLabsBackpack()
    cartPage.clickAddtoCart()
    cartPage.clickCart()
    cartPage.assertCart()
    cy.wait(2000)
    checkoutPage.clickCheckout()
    checkoutPage.checkoutFailed('Gusti', 'Ramadhan')
    checkoutPage.clickContinue()
    cy.wait(2000)
    checkoutPage.assertYourInformationFail()
    cy.wait(2000)
})

