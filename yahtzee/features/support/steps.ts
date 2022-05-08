import * as selenium from 'selenium-standalone';
import {
  BeforeAll,
  AfterAll,
  When,
  Then,
  Given,
  setDefaultTimeout
} from '@cucumber/cucumber';
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

Given('player starts the game', async () => {
  await openYahtzee();
  const startGameButton = await browser.findElement({ id: 'start-game-button' });
  await startGameButton.click();
});

When('player opens yahtzee', async () => {
  await openYahtzee();
});

Then('player can start a game', async () => {
  // Throws error if element not found
  await browser.findElement({ id: 'start-game-button' });
});

Then('player can throw dices', async () => {
  await browser.findElement({ id: 'throw-dices-button' });
});

async function openYahtzee() {
  browser = new Builder().forBrowser('chrome').build();
  await browser.get('file:///Users/mlackman/projects/yahtzee/build/index.html');
}
