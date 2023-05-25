import { Page } from "@playwright/test";

export default class LginPage{

    constructor(public page: Page){
        
    }

  
   async enterEmail(email: string){
       await  this.page.locator("#Email").type(email);
    }
 
   async enterPassword(password: string){
       await  this.page.locator("#Password").type(password);
    }
   
   async enterLoginButton(){
       await  this.page.click("//button[@class='button-1 login-button']");
    }
}