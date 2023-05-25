import { Page, expect } from "@playwright/test";

export default class ElectronicPage{

    constructor(public page: Page){
        
    }

  
   async enterCameraAndPhoto(){
       await  this.page.click("//img[@alt='Picture for category Camera & photo']");
    }
 
   async enterDslr(){
       await  this.page.click("(//h2[@class='product-title']//a)[1]");
       
    }
   
   async enterAddToCartCamera(){
       await  this.page.click("(//button[@class='button-1 add-to-cart-button'])[1]");

    }

    async verifyAddToCartSuccessMessage(){
     const successMessage =  await this.page.locator("//div[@class='bar-notification success']//p[1]").textContent();
     return successMessage;
    }
}