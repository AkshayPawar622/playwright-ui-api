import {Page,Locator} from '@playwright/test';

export class HomePage{

    private readonly page:Page;
    
    private readonly lnkMyAccount:Locator;
    private readonly lnkRegister:Locator;
    private readonly lnkLogin:Locator;
    private readonly lnkLogout:Locator;
    private readonly txtSearchbox:Locator;
    private readonly btnSearch:Locator;
  
    constructor(page:Page){

       this.page=page;

       this.btnSearch= page.getByRole('button',{name: ''});
       this.lnkLogin = page.getByRole('link', { name: 'Login', exact: true }).first();
       this.lnkRegister = page.getByRole('link', { name: 'Register', exact: true }).first();
       this.lnkLogout = page.getByRole('link', { name: 'Logout', exact: true }).first();
       this.lnkMyAccount = page.getByRole('link').filter({ hasText: 'My Account' }).first();
       this.txtSearchbox = page.getByPlaceholder('Search');
    }
    
async  clickMyAccount(){
     await this.lnkMyAccount.click();
}

async clickLogin(){
    await this.lnkLogin.click()
}

async clickLogout(){
    await this.lnkLogout.click();
}

async searchProduct(product: string){
       await this.txtSearchbox.fill(product);
        await this.btnSearch.click();
}

async clickRegisterLnk(){
   await this.lnkRegister.click();
}


}
