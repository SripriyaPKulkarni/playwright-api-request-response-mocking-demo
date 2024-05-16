import {Page, Locator} from '@playwright/test'
import BasePage from './basePage'

export class LandingPage extends BasePage{
    readonly page: Page;
    private readonly myAccountButton: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page){
        super(page);
        this.myAccountButton = page.locator('//a[@role="button"]//span[@class="title"][normalize-space()="My account"]');
        this.loginButton = page.locator('//a[contains(@href,"login")]');
    }

    async hoverOnMyAccountButton(){
        await this.hoverOver(this.myAccountButton);
    }

    async clickLoginButton(){
        await this.clickElement(this.loginButton);
    }
}
