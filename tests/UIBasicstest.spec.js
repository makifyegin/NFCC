const { test } = require('@playwright/test');




test('NFCC test0', async ({ page }) => {

    await page.goto("https://www.nationalfirechiefs.org.uk/");
})