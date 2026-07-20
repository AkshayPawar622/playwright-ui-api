import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    // Locators
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly lnkLogin: Locator;
    private readonly txtSearchBox: Locator;
    private readonly btnSearch: Locator;

    constructor(page: Page) {

        super(page);

        this.lnkMyAccount = page.locator('span:has-text("My Account")');
        this.lnkRegister = page.locator('a:has-text("Register")');
        this.lnkLogin = page.locator('a:has-text("Login")');
        this.txtSearchBox = page.locator('input[placeholder="Search"]');
        this.btnSearch = page.locator('#search button[type="button"]');
    }

    /**
     * Verifies whether the Home Page is displayed.
     */
    async isHomePageExists(): Promise<boolean> {

        return await this.lnkMyAccount.isVisible();

    }

    /**
     * Clicks on the My Account link.
     */
    async clickMyAccount(): Promise<void> {

        await this.click(
            this.lnkMyAccount,
            'My Account Link'
        );

    }

    /**
     * Clicks on the Register link.
     */
    async clickRegister(): Promise<void> {

        await this.click(
            this.lnkRegister,
            'Register Link'
        );

    }

    /**
     * Clicks on the Login link.
     */
    async clickLogin(): Promise<void> {

        await this.click(
            this.lnkLogin,
            'Login Link'
        );

    }

    /**
     * Enters the product name into the search box.
     */
    async enterProductName(productName: string): Promise<void> {

        await this.fill(
            this.txtSearchBox,
            productName,
            'Search Box'
        );

    }

    /**
     * Clicks the Search button.
     */
    async clickSearch(): Promise<void> {

        await this.click(
            this.btnSearch,
            'Search Button'
        );

    }

}