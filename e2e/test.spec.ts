import { expect } from "@playwright/test";
import test from "../lambdatest-setup";
import dotenv from "dotenv";
let apiresponse: string;
dotenv.config();

test("API tests responseBody", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your Store");
  // @ts-ignore
  apiresponse = await page.waitForResponse((response) => response.body, {
    timeout: 60000,
  });
  console.log(apiresponse);

  const response = await page.waitForResponse(
    (response) =>
      response.url().includes("lambdatest.io") && response.status() === 200
  );
});

test("API tests to check Home Page URL", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your Store");

  await page.hover(
    '//a[@role="button"]//span[@class="title"][normalize-space()="My account"]'
  );
  await page.locator("text=Login").click();
  await page.locator("#input-email").fill("lambdatestforplaywright@gmail.com");
  await page.locator('input[name="password"]').fill("lambdatestforplaywright");
  await page.locator('//input[@value="Login"]').click();

  // @ts-ignore
  apiresponse = await page.waitForResponse((response) => response.body, {
    timeout: 60000,
  });
  console.log(apiresponse);

  const response = await page.waitForResponse(
    (response) =>
      response.url().includes("lambdatest.io") && response.status() === 200
  );

  await page
    .locator(
      "//div[@id='entry_217822']//input[@placeholder='Search For Products']"
    )
    .fill("Camera");
});

test("API tests to check URL content", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your Store");

  await page.hover(
    '//a[@role="button"]//span[@class="title"][normalize-space()="My account"]'
  );
  await page.locator("text=Login").click();
  await page.locator("#input-email").fill("lambdatestforplaywright@gmail.com");
  await page.locator('input[name="password"]').fill("lambdatestforplaywright");
  await page.locator('//input[@value="Login"]').click();

  await page
    .locator(
      "//div[@id='entry_217822']//input[@placeholder='Search For Products']"
    )
    .fill("Camera");

  // Start waiting for the specific API response *before* clicking
  const responsePromise = page.waitForResponse(
    (response) =>
      response.url().includes("lambdatest.io") && response.status() === 200
  );

  await page.locator("//button[normalize-space()='Search']").click();

  // Await the response
  const response = await responsePromise;

  // Validate the response
  expect(response.status()).toBe(200);
});

test("API tests to check image", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your Store");

  await page.hover(
    '//a[@role="button"]//span[@class="title"][normalize-space()="My account"]'
  );
  await page.locator("text=Login").click();
  await page.locator("#input-email").fill("lambdatestforplaywright@gmail.com");
  await page.locator('input[name="password"]').fill("lambdatestforplaywright");
  await page.locator('//input[@value="Login"]').click();

  await page
    .locator(
      "//div[@id='entry_217822']//input[@placeholder='Search For Products']"
    )
    .fill("Canon EOS 5D");

  await page.locator("//button[normalize-space()='Search']").click();

  const image = await page.waitForSelector('img[src$=".webp"]', {
    state: "visible",
  });

  const [imageResponse] = await Promise.all([
    page.waitForResponse(
      (resp) => resp.url().includes(".webp") && resp.status() === 200
    ),
  ]);
});
