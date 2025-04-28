/*
Id, name, data-test-id, placeholder, class, css, xpath
*/

import test from "../lambdatest-setup";

test('Different Locator Strategies', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.hover('//a[@role="button"]//span[@class="title"][normalize-space()="My account"]');
    await page.locator('text=Login').click();
    await page.locator('#input-email').fill('lambdatestforplaywright@gmail.com');
    await page.locator('input[name="password"]').fill('lambdatestforplaywright');
});