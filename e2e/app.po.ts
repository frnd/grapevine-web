export class GrapevineWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('grapevine-web-app h1')).getText();
  }
}
