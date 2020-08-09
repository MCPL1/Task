import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  isTitleTextDisplayed() {
    return element(by.css('note-list h2')).isDisplayed;
  }

  isDeleteButtonEnabled() {
    return element(by.css('card button')).isEnabled;
  }
}
