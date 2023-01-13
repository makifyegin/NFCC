const { test } = require('@playwright/test');


test('NFCC test', async () => {
    const context = browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.nationalfirechiefs.org.uk/");
})


test('NFCC test0', async ({ page }) => {

    await page.goto("https://www.nationalfirechiefs.org.uk/");
})