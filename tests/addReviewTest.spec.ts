import { expect } from '@playwright/test';
import test from "../lambdatest-setup";
import {AccountPage} from '../tests/pages/accountPage';
import {LoginPage} from '../tests/pages/loginPage';
import {LandingPage} from '../tests/pages/landingPage';
import {SearchResultDetailsPage} from '../tests/pages/searchResultDetailsPage';
import {SearchResultPage} from '../tests/pages/searchResultPage';
import dotenv from 'dotenv';
dotenv.config();

const nameText = "Vignesh";
const reviewText = "This is a nice prodcut and easy to use";

test('Add a review Test', async({page})=>{
    const accountPage = new AccountPage(page);
    const loginPage = new LoginPage(page);
    const landingPage = new LandingPage(page);
    const searchResultDetailsPage = new SearchResultDetailsPage(page);
    const searchResultPage = new SearchResultPage(page);

    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await landingPage.hoverOnMyAccountButton();
    await landingPage.clickLoginButton();
    await loginPage.enterEmail(process.env.EMAIL);
    await loginPage.enterPassword(process.env.PASSWORD);
    await loginPage.clickLoginButton();
    await accountPage.enterSearchText("iPhone");
    await accountPage.clickSearchButton();
    await searchResultPage.clickFirstSearchResult();
    await searchResultDetailsPage.clickFiveStarRating();
    await searchResultDetailsPage.enterName(nameText);
    await searchResultDetailsPage.enterReview(reviewText);
    await searchResultDetailsPage.clickWriteReviewButton();
    expect(await searchResultDetailsPage.getReviewSuccessMessage()).toBe(' Thank you for your review. It has been submitted to the webmaster for approval.')
});