import {test} from "@playwright/test";

import RegisterPage from "../pages/registerPage";
import LginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import ElectronicPage from "../pages/electronicsPage";


const email = "richard.william@gmail.com";
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

})

