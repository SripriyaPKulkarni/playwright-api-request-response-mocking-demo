import {Page, Locator} from '@playwright/test'
import BasePage from './basePage';

export class LoginPage extends BasePage{
    readonly page: Page;
    private readonly emailTextbox: Locator;
    private readonly passwordTextbox: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page){
        super(page);
        this.emailTextbox = page.locator('#input-email');
        this.passwordTextbox = page.locator('#input-password');
        this.loginButton = page.locator('input[value="Login"]');
    }

    async enterEmail(emailText){
        await this.fillField(this.emailTextbox,emailText);
    }

    async enterPassword(passwordText){
        await this.fillField(this.passwordTextbox,passwordText);
    }

    async clickLoginButton(){
        await this.clickElement(this.loginButton);
    }
}
