class LoginPage {
 constructor(page) {
  this.page = page
  this.username = page.getByPlaceholder('Username')
  this.password = page.locator('#password')
  this.loginBtn = page.locator('[data-test="login-button"]')
  this.loginPageTitle = 'Swag Labs' 
 }

 async goto() {
  await this.page.goto('/')
 }

 async login(loginDetails) {
  await this.username.fill(loginDetails.username)
  await this.password.fill(loginDetails.password)
  await this.loginBtn.click()
 }
}

module.exports = { LoginPage }