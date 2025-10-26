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
  
  async getPrice(productName) {
   const item = this.items.filter({ hasText: productName }).first()
   const price = await item.locator('.inventory_item_price')
   await price.waitFor()
   return await price.innerText()
 }
 

 async openCart() {
  await this.cartLink.click()
 }
 
}

module.exports = { ProductsPage }