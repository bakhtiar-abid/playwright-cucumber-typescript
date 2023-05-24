import { Page, expect } from "@playwright/test";

export default class ElectronicPage{

    constructor(public page: Page){
        
    }

  
   async enterCameraAndPhoto(){
       await  this.page.click("//img[@alt='Picture for category Camera & photo']");
    }
 
   async enterDslr(){
       await  this.page.click("(//img[@alt='Picture of Nikon D5500 DSLR'])[2]");
    }
   
   async enterAddToCartCamera(){
       await  this.page.click("(//button[@class='button-1 add-to-cart-button'])[1]");

    }

    async verifyAddToCartSuccessMessage(){
     const successMessage =  await this.page.locator("//div[@class='bar-notification success']//p[1]").textContent();
     expect(successMessage).toContain("The product has been added to your shopping cart");
    }
}