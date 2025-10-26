const { expect } = require('@playwright/test')

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
    this.itemName = page.locator('.inventory_item_name')
    this.itemPrice = page.locator('.inventory_item_price')
  }

  async enterShippingDetails(userDetails) {
    await this.firstName.fill(userDetails.firstName)
    await this.lastName.fill(userDetails.lastName)
    await this.postalCode.fill(userDetails.postCode)
    await this.continueBtn.click()
  }

  async finishOrder() {
    await this.finishBtn.click()
  }

  async verifyProductAndPrice(productName, price) {
    await expect(this.itemName).toHaveText(productName)
    await expect(this.itemPrice).toHaveText(price)
  }

  async verifyPurchaseSuccess(confirmMessage) {
    await this.orderSuccessHeader.waitFor({ state: 'visible' })
    await expect(this.orderSuccessHeader).toHaveText(confirmMessage.successHeaderText)
    await expect(this.orderSuccessText).toContainText(confirmMessage.successContentText)
  }
}

module.exports = { CheckoutPage }
