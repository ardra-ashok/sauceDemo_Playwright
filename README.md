# sauceDemo_Playwright - JavaScript

**Test Steps**
 1. Open the SauceDemo website 
    should verify the url
 2. Login using valid username (standard_user) and password (secret_sauce)
    should verify the products list is present
 3. Add a product to the cart
    verify product count increased from 0 to 1
 4. Open the cart 
    verify the added product is present in the cart
 5. Click checkout 
 6. Enter shipping details and click continue
 7. Finish checkout and vetify order confirmation message ('Thank you for your order!')

 

 **How to install and run the project**
  1. Clone Project 
    * git clone git@github.com:ardra-ashok/sauceDemo_Playwright.git
    * cd sauceDemo_Playwright
     
  2. Steps for running the project 
    * npm install
    * npx playwright install
    * npm test
    * or headed - npm run test:headed


     

     


