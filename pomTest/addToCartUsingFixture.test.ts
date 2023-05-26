import { expect, test} from "../base/pomFixture";


const email = "new_user01@gmail.com";
const password = "123456";
const confirmPass = "123456";

test.describe("",async () => {
    // test.use({
    //     baseURL: ""
    // })
    test("Register test_01", async ({ page, baseURL, registerPage }) => {
        // const register = new RegisterPage(page);
        await page.goto(`${baseURL}register`);
        await registerPage.enterFirstName("Richard");
        await registerPage.enterLastName("William");
        await registerPage.enterEmail(email);
        // await register.enterPhone("0984485748");
        // await register.enterFax("0957487588");
        await registerPage.enterPassword(password);
        await registerPage.enterConfirmPassword(confirmPass);
        await registerPage.enterRegister();
        expect(await registerPage.successMessage()).toContain("Your registration completed");
    
    
    });
    
    test("Login test_01", async ({ page, baseURL, loginPage }) => {
        // const login = new LoginPage(page);
        await page.goto(`${baseURL}login`);
        await loginPage.enterEmail(email);
        await loginPage.enterPassword(password);
        await loginPage.enterLoginButton();
    });
    
    
    test("Go to Electornic Page to search product", async ({ page, baseURL, homePage }) => {
    
        // const homePage = new HomePage(page);
        await page.goto(`${baseURL}`);
        await homePage.enterElectronicPage();
    
    });
    
    test("Select Product From the list", async ({ page, baseURL, electronicPage }) => {
        // const selectProduct = new ElectronicPage(page);
    
        await page.goto(`${baseURL}electronics`);
        await electronicPage.enterCameraAndPhoto();
        await electronicPage.enterDslr();
        await electronicPage.enterAddToCartCamera();
        expect(await electronicPage.verifyAddToCartSuccessMessage()).toContain("The product has been added to your ");
    
    
    });
})