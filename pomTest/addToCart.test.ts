import { expect, test} from "@playwright/test";

import RegisterPage from "../pages/registerPage";
import LginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import ElectronicPage from "../pages/electronicsPage";


const email = "new_account12345@gmail.com";
const password = "123456";
const confirmPass = "123456";

test("Register test_01", async ({page, baseURL})=>{
    const register = new RegisterPage(page);
    await page.goto(`${baseURL}register`);
    await register.enterFirstName("Richard");
    await register.enterLastName("William");
    await register.enterEmail(email);
    await register.enterPhone("0984485748");
    await register.enterFax("0957487588");
    await register.enterPassword(password);
    await register.enterConfirmPassword(confirmPass);
    await register.enterRegister();
    expect(await register.successMessage()).toContain("Your registration completed");
    

})

test("Login test_01", async ({page,baseURL}) => {
    const login = new LginPage(page);
    await page.goto(`${baseURL}login`);
    await  login.enterEmail(email);
   await login.enterPassword(password);
   await login.enterLoginButton();
})


test("Go to Electornic Page to search product",async ({page, baseURL}) => {

    const homePage = new HomePage(page);
    await page.goto(`${baseURL}`);
    await homePage.enterElectronicPage();
   
})

test("Select Product From the list", async ({page, baseURL})=>{
  const selectProduct = new ElectronicPage(page);

  await page.goto(`${baseURL}electronics`);
  await selectProduct.enterCameraAndPhoto();
  await selectProduct.enterDslr();
  await selectProduct.enterAddToCartCamera();
  expect(await selectProduct.verifyAddToCartSuccessMessage()).toContain("The product has been added to your shopping cart");


})

