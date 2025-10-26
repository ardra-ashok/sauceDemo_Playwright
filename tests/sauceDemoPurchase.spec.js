const { test, expect } = require('@playwright/test')

const { LoginPage } = require('../pages/loginPage')


test.describe('SauceDemo E2E - Purchase flow', () => {
 test('Should login, add item, checkout and complete order', async ({page }) => {
 
  const login = new LoginPage(page);
  await login.goto()
  await expect(login.loginBtn).toBeVisible()
  await login.login()




  


 })
})

