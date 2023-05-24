import { Page } from '@playwright/test';


export default class HomePage{



    constructor(public page: Page){

    }

    async enterElectronicPage(){
        await  this.page.click("//ul[@class='top-menu notmobile']//a[normalize-space()='Electronics']");
     }
}