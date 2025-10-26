class ProductsPage {


 constructor(page) {
  this.page = page
  this.items = page.locator('.inventory_item')
  this.cartItems = page.locator('[data-test="shopping-cart-badge"]')
  this.cartLink = page.locator('.shopping_cart_link')
 }

}

module.exports = { ProductsPage }