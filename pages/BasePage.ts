import { Locator, Page } from '@playwright/test';
import { Logger } from '../utils/Logger';

export class BasePage {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    protected async click(locator: Locator, elementName: string): Promise<void> {

        Logger.info(`Clicking '${elementName}'`);

        try {

            await locator.click();

            Logger.info(`Clicked '${elementName}' successfully`);

        } catch (error) {

            Logger.error(`Failed to click '${elementName}'`);

            throw error;

        }

    }

    protected async fill(locator: Locator, value: string, elementName: string): Promise<void> {

    Logger.info(`Entering '${value}' into '${elementName}'`);

    try {

        await locator.fill(value);

        Logger.info(`Entered value into '${elementName}' successfully`);

    } catch (error) {

        Logger.error(`Failed to enter value into '${elementName}'`);

        throw error;

    }

}
protected async isVisible(locator: Locator): Promise<boolean> {

    return await locator.isVisible();

}

}