import { Locator, Page } from '@playwright/test';

export class RegistrationPage {

    private readonly page: Page;

    private readonly txtFirstName: Locator;
    private readonly txtLastName: Locator;
    private readonly txtEmail: Locator;
    private readonly txtTelephone: Locator;
    private readonly txtPassword: Locator;
    private readonly txtPasswordConfirm: Locator;
    private readonly rdoNewsletterYes: Locator;
    private readonly rdoNewsletterNo: Locator;
    private readonly chkPrivacyPolicy: Locator;
    private readonly btnContinue: Locator;

    constructor(page: Page) {
        this.page = page;

        this.txtFirstName = page.getByPlaceholder('First Name');
        this.txtLastName = page.getByPlaceholder('Last Name');
        this.txtEmail = page.getByPlaceholder('E-Mail');
        this.txtTelephone = page.getByPlaceholder('Telephone');
        this.txtPassword = page.getByPlaceholder('Password', { exact: true });
        this.txtPasswordConfirm = page.getByPlaceholder('Password Confirm');
        this.rdoNewsletterYes = page.getByRole('radio', { name: 'Yes' });
        this.rdoNewsletterNo = page.getByRole('radio', { name: 'No' });
        this.chkPrivacyPolicy = page.getByRole('checkbox');
        this.btnContinue = page.getByRole('button', { name: 'Continue' });
    }

    async enterFirstName(firstName: string) {
        await this.txtFirstName.fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.txtLastName.fill(lastName);
    }

    async enterEmail(email: string) {
        await this.txtEmail.fill(email);
    }

    async enterTelephone(telephone: string) {
        await this.txtTelephone.fill(telephone);
    }

    async enterPassword(password: string) {
        await this.txtPassword.fill(password);
    }

    async enterPasswordConfirm(password: string) {
        await this.txtPasswordConfirm.fill(password);
    }

    async selectNewsletterSubscription(subscribe: boolean) {
        await (subscribe ? this.rdoNewsletterYes : this.rdoNewsletterNo).check();
    }

    async agreeToPrivacyPolicy() {
        await this.chkPrivacyPolicy.check();
    }

    async clickContinue() {
        await this.btnContinue.click();
    }

    async registerAccount(
        firstName: string,
        lastName: string,
        email: string,
        telephone: string,
        password: string,
        subscribeToNewsletter: boolean
    ) {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterEmail(email);
        await this.enterTelephone(telephone);
        await this.enterPassword(password);
        await this.enterPasswordConfirm(password);
        await this.selectNewsletterSubscription(subscribeToNewsletter);
        await this.agreeToPrivacyPolicy();
        await this.clickContinue();
    }
}
