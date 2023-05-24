import { Page } from "@playwright/test";

export default class RegisterPage{

    constructor(public page: Page){
        
    }

   async enterFirstName(firstname: string){
       await  this.page.locator("#FirstName").type(firstname);
    }
   async enterLastName(lastname: string){
       await  this.page.locator("#LastName").type(lastname);
    }
   async enterEmail(email: string){
       await  this.page.locator("#Email").type(email);
    }
   async enterPhone(phone: string){
       await  this.page.locator("#Phone").type(phone);
    }
   async enterFax(fax: string){
       await  this.page.locator("#Fax").type(fax);
    }
   async enterPassword(password: string){
       await  this.page.locator("#Password").type(password);
    }
   async enterConfirmPassword(consfirmPass: string){
       await  this.page.locator("#ConfirmPassword").type(consfirmPass);
    }
   async enterRegister(){
       await  this.page.locator("#register-button").click();
    }
}