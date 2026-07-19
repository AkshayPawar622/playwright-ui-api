import { Locator, Page } from '@playwright/test';

export class LoginPage {

    private readonly page: Page;

    private readonly txtEmail: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;

    constructor(page: Page) {
        this.page = page;

        this.txtEmail = page.getByPlaceholder('E-Mail');
        this.txtPassword = page.getByPlaceholder('Password');
        this.btnLogin = page.getByRole('button', { name: 'Login' });
    }

    async enterEmail(email: string) {
        await this.txtEmail.fill(email);
    }

    async enterPassword(password: string) {
        await this.txtPassword.fill(password);
    }

    async clickLogin() {
        await this.btnLogin.click();
    }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}
