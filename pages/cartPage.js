class CartPage {
 constructor(page) {
  this.page = page
  this.cartItems = page.locator('.cart_item')
  this.checkoutBtn = page.locator('#checkout')
 }

 async verifyItemInCart(productName) {
  await this.cartItems.filter({hasText: productName }).first().waitFor()
 }

 async checkout() {
  await this.checkoutBtn.click()
 }
 
}

module.exports = { CartPage }