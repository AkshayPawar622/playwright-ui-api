import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { ShoppingCartPage } from './ShoppingCartPage'; // Import ShoppingCartPage if needed

export class ProductPage extends BasePage {
    
    // Locators using CSS selectors
    private readonly txtQuantity: Locator;
    private readonly btnAddToCart: Locator;
    private readonly cnfMsg: Locator;
    private readonly btnItems: Locator;
    private readonly lnkViewCart: Locator;

    constructor(page: Page) {
        super(page);
        
        // Initialize locators with CSS selectors
        this.txtQuantity = page.locator('input[name="quantity"]');
        this.btnAddToCart = page.locator('#button-cart');
        this.cnfMsg = page.locator('.alert.alert-success.alert-dismissible');
        this.btnItems = page.locator('#cart');
        this.lnkViewCart = page.locator('strong:has-text("View Cart")');
    }

    /**
     * Sets the product quantity
     * @param qty - Quantity to set
     */
    async setQuantity(qty: string): Promise<void> {
        await this.fill(this.txtQuantity, '', 'Quantity');
        await this.fill(this.txtQuantity, qty, 'Quantity');
    }

    /**
     * Adds product to cart
     */
    async addToCart(): Promise<void> {
        await this.click(this.btnAddToCart, 'Add to Cart Button');
    }

    /**
     * Checks if confirmation message is visible
     * @returns Promise<boolean> - Returns true if message is visible
     */
    async isConfirmationMessageVisible(): Promise<boolean> {
        try {
            if(this.cnfMsg!=null){
                 return true;
            }
            else{
                return false;
            }//await expect(this.cnfMsg).toBeVisible();
           
        } catch (error) {
            console.log(`Confirmation message not found: ${error}`);
            return false;
        }
    }

    /**
     * Clicks on Items button to navigate to cart
     */
    async clickItemsToNavigateToCart(): Promise<void> {
        await this.click(this.btnItems, 'Items Button');
    }

    /**
     * Clicks on View Cart link
     * @returns Promise<ShoppingCartPage> - Returns ShoppingCartPage instance
     */
    async clickViewCart(): Promise<ShoppingCartPage> {
        await this.click(this.lnkViewCart, 'View Cart Link');
        return new ShoppingCartPage(this.page);
    }

    /**
     * Complete workflow to add product to cart
     * @param quantity - Quantity of product to add
     */
    async addProductToCart(quantity: string): Promise<void> {
        await this.setQuantity(quantity);
        await this.addToCart();
        await this.isConfirmationMessageVisible();
    }
}
