import * as selenium from 'selenium-standalone';
import { BeforeAll, AfterAll, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { Driver } from 'selenium-webdriver/chrome';
import { Builder, ThenableWebDriver } from 'selenium-webdriver';
import { ChildProcess } from "child_process";

let browser: ThenableWebDriver;
let seleniumServerProcess: ChildProcess;

setDefaultTimeout(60000);

BeforeAll(async () => {
  seleniumServerProcess = await selenium.start();
});

AfterAll(async () => {
  await browser.close();
  seleniumServerProcess.kill();
});

When('player opens yahtzee', async () => {
  browser = new Builder().forBrowser('chrome').build();
  await browser.get('file:///Users/mlackman/projects/yahtzee/build/index.html');

});

Then('player can start a game', async () => {
  // Throws error if element not found
  await browser.findElement({ id: 'start-game-button' });
});
