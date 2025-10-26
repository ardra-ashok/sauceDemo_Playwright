class LoginPage {
 constructor(page) {
  this.page = page;
  this.username = page.getByPlaceholder('Username');
  this.password = page.locator('#password')
    this.loginBtn = page.locator('[data-test="login-button"]')
 }


 async goto() {
  await this.page.goto('https://www.saucedemo.com/')
 }

 async login(user='standard_user', password='secret_sauce') {
  await this.username.fill(user)
  await this.password.fill(password)
  await this.loginBtn.click()
 }
}

module.exports = { LoginPage }