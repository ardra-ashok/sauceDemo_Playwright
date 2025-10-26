const { test, expect } = require('@playwright/test')

const { LoginPage } = require('../pages/loginPage')
const { ProductsPage } = require('../pages/productsPage')


test.describe('SauceDemo E2E - Purchase flow', () => {
 test('Should login, add item, checkout and complete order', async ({page }) => {
 
  const login = new LoginPage(page)
  const products = new ProductsPage(page)

  await login.goto()
  await expect(login.loginBtn).toBeVisible()
  await login.login()


  await expect(page).toHaveURL(/inventory/)
  const itemsCount = await products.items.count()
  expect(itemsCount).toBeGreaterThan(0)





  


 })
})

