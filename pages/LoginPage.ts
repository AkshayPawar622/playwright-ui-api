import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    
    // Locators
    private readonly txtEmailAddress: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly txtErrorMessage: Locator;
    

    constructor(page: Page) {
        super(page);
        
        // Initialize locators with CSS selectors
        this.txtEmailAddress = page.locator('#input-email');
        this.txtPassword = page.locator('#input-password');
        this.btnLogin = page.locator('input[value="Login"]');
        this.txtErrorMessage=page.locator('.alert.alert-danger.alert-dismissible');
    }

    /**
     * Sets the email address in the email field
     * @param email - Email address to enter
     */
    async setEmail(email: string){
        await this.fill(this.txtEmailAddress, email, 'Email Address');
    }

    /**
     * Sets the password in the password field
     * @param pwd - Password to enter
     */
    async setPassword(pwd: string) {
        await this.fill(this.txtPassword, pwd, 'Password');
    }

    /**
     * Clicks the login button
     */
    async clickLogin(){
        await this.click(this.btnLogin, 'Login Button');
    }

    /**
     * Performs complete login action
     * @param email - Email address to enter
     * @param password - Password to enter
     */
    async login(email: string, password: string){
        await this.setEmail(email);
        await this.setPassword(password);
        await this.clickLogin();
    }

    async getloginErrorMessage():Promise<null | string>{
       
        return(this.txtErrorMessage.textContent());
    }
    
}
