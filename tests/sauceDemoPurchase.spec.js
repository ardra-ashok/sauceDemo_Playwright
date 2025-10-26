const { test, expect } = require('@playwright/test')

const { LoginPage } = require('../pages/loginPage')
const { ProductsPage } = require('../pages/productsPage')
const { CartPage } = require('../pages/cartPage')
const { CheckoutPage } = require('../pages/checkoutPage')


test.describe('SauceDemo E2E - Purchase flow', () => {
 test('Should login, add item, checkout and complete order', async ({ page }) => {
 
  const login = new LoginPage(page)
  const products = new ProductsPage(page)
  const cart = new CartPage(page)
  const checkout = new CheckoutPage(page)

  const productName = 'Sauce Labs Fleece Jacket'


  // Go to login page and login with valid credentials 
  await login.goto()
  await expect(login.loginBtn).toBeVisible()
  await login.login()

  // verify that the products are loaded
  await expect(page).toHaveURL(/inventory/)
  const itemsCount = await products.items.count()
  expect(itemsCount).toBeGreaterThan(0)

 // Add product to Cart
  await products.addProductToCart(productName)
  await expect(products.cartItemsCount).toHaveText('1')
 
  // Open cart and verify product is present
  await products.openCart()
  await cart.verifyItemInCart(productName)

  // Enter shipping details and checkout
  await cart.checkout()
  await checkout.enterShippingDetails()

 // Finish checkout and confirm purchase success message
  await checkout.finishOrder()
  await checkout.verifyPurchaseSuccess()
 })
})

