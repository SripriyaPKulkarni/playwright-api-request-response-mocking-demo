import {Page, Locator} from '@playwright/test'
import BasePage from './basePage'


export class AccountPage extends BasePage{
    readonly page: Page;
    private readonly searchBarTextBox: Locator;
    private readonly homeButton: Locator;
    private readonly searchButton: Locator;

    constructor(page: Page){
        super(page);
        this.searchBarTextBox = page.locator('(//input[@name="search"])[1]');
        this.homeButton = page.locator('//a[contains(text(),"Home")]');
        this.searchButton = page.locator('button[class="type-text"]');
    }

    async enterSearchText(searchText:string){
        await this.fillField(this.searchBarTextBox,searchText);
    }

    async clickHomeButton(){
        await this.clickElement(this.homeButton);
    }

    async clickSearchButton(){
        await this.clickElement(this.searchButton);
    }
}