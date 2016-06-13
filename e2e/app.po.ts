export class TestNgMat2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('test-ng-mat-2-app h1')).getText();
  }
}
