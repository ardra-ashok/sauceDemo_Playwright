const { test, expect } = require('@playwright/test')

const { LoginPage } = require('../pages/loginPage')
const { ProductsPage } = require('../pages/productsPage')
const { CartPage } = require('../pages/cartPage')
const { CheckoutPage } = require('../pages/checkoutPage')


test.describe('SauceDemo E2E - Purchase flow', () => {
 test('Should login, add item, checkout and complete order', async ({page }) => {
 
  const login = new LoginPage(page)
  const products = new ProductsPage(page)
  const cart = new CartPage(page)
  const checkout = new CheckoutPage(page)

  const productName = 'Sauce Labs Fleece Jacket'

  await login.goto()
  await expect(login.loginBtn).toBeVisible()
  await login.login()

  await expect(page).toHaveURL(/inventory/)
  const itemsCount = await products.items.count()
  expect(itemsCount).toBeGreaterThan(0)

  await products.addProductToCart(productName)
  await expect(products.cartItemsCount).toHaveText('1')
 
  await products.openCart()
  await cart.verifyItemInCart(productName)

  await cart.checkout()
  await checkout.enterShippingDetails()

  await checkout.finishOrder()
  await checkout.verifyPurchaseSuccess()
 })
})

