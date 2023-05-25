import {test as baseTest} from "@playwright/test";
import RegisterPage from './../pages/registerPage';

import HomePage from "../pages/homePage";
import ElectronicPage from "../pages/electronicsPage";
import LoginPage from "../pages/loginPage";


type pages = {
    registerPage :RegisterPage;
    loginPage : LoginPage;
    homePage : HomePage;
    electronicPage : ElectronicPage;
}


const testPages = baseTest.extend<pages>({


 registerPage: async ({page}, use)=>{
    await use(new RegisterPage(page));
 },


 loginPage: async ({page}, use)=>{
    await use(new LoginPage(page));
 },
 homePage: async ({page}, use)=>{
    await use(new HomePage(page));
 },
 electronicPage: async ({page}, use)=>{
    await use(new ElectronicPage(page));
 }

})

export const test = testPages;
export const expect = testPages.expect;