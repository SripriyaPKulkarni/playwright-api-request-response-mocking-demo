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
});

test("API tests headers", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your Store");
  // @ts-ignore
  apiresponse = await page.waitForResponse((response) => response.headers, {
    timeout: 60000,
  });
  console.log(apiresponse);
});

test("API tests response all headers method", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your Store");
  // @ts-ignore
  apiresponse = await page.waitForResponse((response) => response.allHeaders, {
    timeout: 60000,
  });
  console.log(apiresponse);
});

test("API tests response headersArray", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your Store");
  // @ts-ignore
  apiresponse = await page.waitForResponse(
    (response) => response.headersArray,
    { timeout: 60000 }
  );
  console.log(apiresponse);
});

test("API tests response JSON", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your Store");
  // @ts-ignore
  apiresponse = await page.waitForResponse((response) => response.json, {
    timeout: 60000,
  });
  console.log(apiresponse);
});

test("API tests response OK", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your Store");
  // @ts-ignore
  apiresponse = await page.waitForResponse((response) => response.ok, {
    timeout: 60000,
  });
  console.log(apiresponse);
});

test("API tests response status", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your Store");
  // @ts-ignore
  apiresponse = await page.waitForResponse((response) => response.status, {
    timeout: 60000,
  });
  console.log(apiresponse);
});

test("API tests response statusText", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your Store");
  // @ts-ignore
  apiresponse = await page.waitForResponse((response) => response.statusText, {
    timeout: 60000,
  });
  console.log(apiresponse);
});

test("API tests response Text", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your Store");
  // @ts-ignore
  apiresponse = await page.waitForResponse((response) => response.text, {
    timeout: 60000,
  });
  console.log(apiresponse);
});

test("API tests response URL", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your Store");
  // @ts-ignore
  apiresponse = await page.waitForResponse((response) => response.url, {
    timeout: 60000,
  });
  console.log(apiresponse);
});
