import { expect } from '@playwright/test';
import test from "../lambdatest-setup";

test('Radio button Handling', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/radiobutton-demo');
    const maleRadioButton = page.locator('(//input[@value="Male"])[1]');
    const femaleRadioButton = page.locator('(//input[@value="Female"])[1]');
    await expect(maleRadioButton).not.toBeChecked();
    await expect(femaleRadioButton).not.toBeChecked();
    await maleRadioButton.check();
    await expect(maleRadioButton).toBeChecked();
    await expect(femaleRadioButton).not.toBeChecked();
});

test('Checkbox button Handling', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo');
    const checkbox1 = page.locator('#ex1-check1');
    const checkbox2 = page.locator('#ex1-check2');
    const checkbox3 = page.locator('(//input[@id="ex1-check3"])[1]');
    const checkbox4 = page.locator('(//input[@id="ex1-check3"])[2]');
    
    await expect(checkbox1).not.toBeChecked();
    await expect(checkbox2).not.toBeChecked();
    await expect(checkbox3).not.toBeChecked();
    await expect(checkbox4).not.toBeChecked();

    await checkbox1.check();
    await checkbox2.check();

    await expect(checkbox1).toBeChecked();
    await expect(checkbox2).toBeChecked();
    await expect(checkbox3).not.toBeChecked();
    await expect(checkbox4).not.toBeChecked();
});



test('Simple Alert Handling', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
    page.on('dialog',async(alert)=>{
        const alertTextMessage = alert.message();
        expect(alertTextMessage).toEqual('I am an alert box!');
        alert.accept();
    })
    await page.locator('(//button[@type="button"])[1]').click();
});

test('Confirm Alert - Ok Button', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
    page.on('dialog',async(alert)=>{
        const alertTextMessage = alert.message();
        expect(alertTextMessage).toEqual('Press a button!');
        alert.accept();
        // alert.dismiss(); // To Click on Cancel button in the Alert Box
        await expect(page.locator('#confirm-demo')).toHaveText('You pressed OK!')
    })
    await page.locator('(//button[@type="button"])[2]').click();
});

test('Prompt Alert - Ok Button', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
    page.on('dialog',async(alert)=>{
        const alertTextMessage = alert.message();
        expect(alertTextMessage).toEqual('Please enter your name');
        alert.accept("Vignesh");
        // alert.dismiss(); // To Click on Cancel button in the Alert Box
        await expect(page.locator('#prompt-demo')).toHaveText("You have entered 'Vignesh' !");
    })
    await page.locator('(//button[@type="button"])[3]').click(); 
});


test('Single Static DropDown Handling', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption('#select-demo',{
        value:"Tuesday"
    });
    await page.selectOption('#select-demo',{
        label:"Wednesday"
    });
    await page.selectOption('#select-demo',{
       index:1
    });
    await page.pause();
});

test('Multi Static DropDown Handling', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption('#multi-select',[
        {value:"Florida"},
        {label:"New Jersey"},
        {index:4}
    ])
    await page.waitForTimeout(3000);
});

test('Searchable Dynamic DropDown', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
    await page.locator('(//span[@role="combobox"])[1]').click();
    await page.locator('(//input[@type="search"])[2]').fill('India');
    await page.locator('#select2-country-results>li').click();
});

test('Non Searchable Dynamic DropDown', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
    await page.locator('(//span[@role="combobox"])[1]').click();
    await page.locator('#select2-country-results').locator('li',{
        hasText:"Denmark"
    }).click(); 
});

test('Frame Handling Using Page.Frame()', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/iframe-demo/');
    const frame1 = page.frameLocator('#iFrame1');
    await frame1?.locator('//div[text()="Your content."]').fill('LambdaTest');
});

test('Single Window Handling', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');
  const [newWindow] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('//a[contains(text(),"Like us On Facebook")]')
  ]);
  await newWindow.waitForLoadState();
  await newWindow.locator('div[aria-label="Close"]').click();
  await newWindow.waitForTimeout(3000);
  await newWindow.close();
});

test('Multiple Window Handling', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');
  const [multipleWindow] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('#followboth')
  ]);

  await multipleWindow.waitForLoadState();
  const pages = multipleWindow.context().pages();
  await pages[1].locator('div[aria-label="Close"]').click();
  await pages[2].getByRole('button', { name: 'No, thanks' }).click();
  await pages[2].locator('div[aria-label="Follow @lambdatesting"]').click();
  await page.pause();
  await pages[1].close();
  await pages[2].close();
});