export class NgclitestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngclitest-app h1')).getText();
  }
}
