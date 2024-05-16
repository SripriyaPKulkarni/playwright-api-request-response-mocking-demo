import {Page, Locator} from '@playwright/test'
import BasePage from './basePage'


export class SearchResultPage extends BasePage{
    readonly page: Page;
    private readonly firstSearchResult: Locator;

    constructor(page: Page){
        super(page);
        this.firstSearchResult = page.locator('(//div[@class="carousel-item active"])[1]');
    }

    async clickFirstSearchResult(){
        await this.clickElement(this.firstSearchResult);
    }
}