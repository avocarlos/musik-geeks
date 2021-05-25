import { browser, by, element, ExpectedConditions } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('#welcomeMessage')).getText() as Promise<string>;
  }

  wait(): void{
    var until = ExpectedConditions;
    browser.wait(until.presenceOf(element(by.css('#welcomeMessage'))), 5000, 'Element taking too long to appear in the DOM');

  }
}
