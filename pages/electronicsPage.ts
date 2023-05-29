import { Page, expect } from "@playwright/test";

export default class ElectronicPage{

    constructor(public page: Page){
        
    }

  
   async enterCameraAndPhoto(){
       await  this.page.locator("//img[@alt='Picture for category Camera & photo']").click();
    }
 
   async enterDslr(){
    (await this.page.waitForSelector("//h2[@class='product-title']//a[contains(text(),'Nikon D5500 DSLR')]", { timeout: 10000 })).click();
      
       
    }
   
   async enterAddToCartCamera(){
       (await  this.page.waitForSelector("(//button[@id='add-to-cart-button-15'])[1]", { timeout: 10000 })).click();

    }

    async verifyAddToCartSuccessMessage(){
     const successMessage =  (await this.page.waitForSelector("//div[@class='bar-notification success']//p[1]", {timeout: 10000})).textContent();
    //  const successMessage =  this.page.innerText("//div[@class='bar-notification success']//p[1]");
     return successMessage;
    }
}