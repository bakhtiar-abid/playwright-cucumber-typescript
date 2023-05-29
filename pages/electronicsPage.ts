import { Page, expect } from "@playwright/test";

export default class ElectronicPage{

    constructor(public page: Page){
        
    }

  
   async enterCameraAndPhoto(){
       await  this.page.locator("//img[@title='Show products in category Smart Watch']").click();
    }
 
   async enterDslr(){
    (await this.page.waitForSelector("//div[@class='picture']//img[@title='Show details for Xiaomi Amazfit GTS 2 Smart Watch']", { timeout: 10000 })).click();
      
       
    }
   
   async enterAddToCartCamera(){
       (await  this.page.waitForSelector("//button[@class='button-1 add-to-cart-button']", { timeout: 10000 })).click();

    }

    async verifyAddToCartSuccessMessage(){
     const successMessage =  (await this.page.waitForSelector("//div[@class='bar-notification success']//p[1]", {timeout: 10000})).textContent();
    //  const successMessage =  this.page.innerText("//div[@class='bar-notification success']//p[1]");
     return successMessage;
    }
}