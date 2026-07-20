import { Page } from "@playwright/test";
import { CheckoutPage } from "../pages/CheckoutPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { ProductPage } from "../pages/ProductPage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { SearchResultsPage } from "../pages/SearchResultsPage";
import { ShoppingCartPage } from "../pages/ShoppingCartPage";

export class Application {
       private page: Page;
       private loginPage?: LoginPage;
       private checkoutPage?: CheckoutPage;
       private homePage?: HomePage;
       private logoutPage?: LogoutPage;
       private myAccountPage?: MyAccountPage;
       private productPage?: ProductPage;
       private registrationPage?: RegistrationPage;
       private searchResultsPage?: SearchResultsPage;
       private shoppingCartPage?: ShoppingCartPage;

       constructor(page:Page) {
        this.page=page;
       }
       getLoginPage(): LoginPage {
        if (!this.loginPage) {
            this.loginPage = new LoginPage(this.page);
        }
        return this.loginPage;
       }

       getCheckoutPage(): CheckoutPage {
        if (!this.checkoutPage) {
            this.checkoutPage = new CheckoutPage(this.page);
        }
        return this.checkoutPage;
       }

       getHomePage(): HomePage {
        if (!this.homePage) {
            this.homePage = new HomePage(this.page);
        }
        return this.homePage;
       }

       getLogoutPage(): LogoutPage {
        if (!this.logoutPage) {
            this.logoutPage = new LogoutPage(this.page);
        }
        return this.logoutPage;
       }

       getMyAccountPage(): MyAccountPage {
        if (!this.myAccountPage) {
            this.myAccountPage = new MyAccountPage(this.page);
        }
        return this.myAccountPage;
       }

       getProductPage(): ProductPage {
        if (!this.productPage) {
            this.productPage = new ProductPage(this.page);
        }
        return this.productPage;
       }

       getRegistrationPage(): RegistrationPage {
        if (!this.registrationPage) {
            this.registrationPage = new RegistrationPage(this.page);
        }
        return this.registrationPage;
       }

       getSearchResultsPage(): SearchResultsPage {
        if (!this.searchResultsPage) {
            this.searchResultsPage = new SearchResultsPage(this.page);
        }
        return this.searchResultsPage;
       }

       getShoppingCartPage(): ShoppingCartPage {
        
        if (!this.shoppingCartPage) {
            this.shoppingCartPage = new ShoppingCartPage(this.page);
        }
        return this.shoppingCartPage;
       }

}
