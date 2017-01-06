import { browser, element, by } from 'protractor';

export class DevPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sa-root h1')).getText();
  }
}
