import { When, Then } from '@cucumber/cucumber';

import { Driver } from 'selenium-webdriver/chrome';
import { Builder, ThenableWebDriver } from 'selenium-webdriver';

let browser: ThenableWebDriver;

When('player opens yahtzee', async () => {
  const browser = await new Builder().forBrowser('chrome').build();
  await browser.get('file:///Users/mlackman/projects/yahtzee/build/index.html');
});

Then('player can start a game', async () => {
  await browser.quit();
});
