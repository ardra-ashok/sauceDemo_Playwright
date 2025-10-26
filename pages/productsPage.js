class ProductsPage {


 constructor(page) {
  this.page = page
  this.items = page.locator('.inventory_item')
  this.cartItemsCount = page.locator('[data-test="shopping-cart-badge"]')
  this.cartLink = page.locator('.shopping_cart_link')
 }

 async addProductToCart(productName) {
  const item = this.items.filter({ hasText: productName }).first()
  await item.locator('button').click()
}

 async openCart() {
  await this.cartLink.click()
 }
 
}

module.exports = { ProductsPage }