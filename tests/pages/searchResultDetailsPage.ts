import {Page, Locator} from '@playwright/test'
import BasePage from './basePage'


export class SearchResultDetailsPage extends BasePage{
    readonly page: Page;
    private readonly starRatingButton: Locator;
    private readonly nameTextBox: Locator;
    private readonly reviewTextBox: Locator;
    private readonly writeReviewButton: Locator;
    private readonly reviewSuccessMessage: Locator;

    constructor(page: Page){
        super(page);
        this.starRatingButton = page.locator('label[for="rating-5-216860"]');
        this.nameTextBox = page.locator('#input-name');
        this.reviewTextBox = page.locator('#input-review');
        this.writeReviewButton = page.locator('#button-review');
        this.reviewSuccessMessage = page.locator('.alert.alert-success.alert-dismissible');
    }

    async clickFiveStarRating(){
        await this.clickElement(this.starRatingButton);
    }

    async enterName(nameText:string){
        await this.fillField(this.nameTextBox,nameText);
    }

    async enterReview(reviewText:string){
        await this.fillField(this.reviewTextBox,reviewText);
    }

    async clickWriteReviewButton(){
        await this.clickElement(this.writeReviewButton);
    }

    async getReviewSuccessMessage(){
        return this.getElementText(this.reviewSuccessMessage);
    }
}