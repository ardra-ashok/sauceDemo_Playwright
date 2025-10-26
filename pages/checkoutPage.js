import { expect } from '@playwright/test'

class CheckoutPage {
  constructor(page) {
    this.page = page
    this.firstName = page.locator('[name="firstName"]')
    this.lastName = page.locator('#last-name')
    this.postalCode = page.locator('#postal-code')
    this.continueBtn = page.locator('[type="submit"]')
    this.finishBtn = page.locator('#finish')
    this.orderSuccessHeader = page.locator('.complete-header')
    this.orderSuccessText = page.locator('[data-test="complete-text"]')
  }

  async enterShippingDetails(
    firstName = 'Maria',
    lastName = 'Luca',
    postCode = '2000'
  ) {
    await this.firstName.fill(firstName)
    await this.lastName.fill(lastName)
    await this.postalCode.fill(postCode)
    await this.continueBtn.click()
  }

  async finishOrder() {
    await this.finishBtn.click()
  }

  async verifyPurchaseSuccess() {
    await this.orderSuccessHeader.waitFor({ state: 'visible' })
    await expect(this.orderSuccessHeader).toHaveText('Thank you for your order!')
   await expect(this.orderSuccessText).toContainText(
     'Your order has been dispatched,'
   )
  }
}

module.exports = { CheckoutPage }
