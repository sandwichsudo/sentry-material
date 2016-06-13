import { TestNgMat2Page } from './app.po';

describe('test-ng-mat-2 App', function() {
  let page: TestNgMat2Page;

  beforeEach(() => {
    page = new TestNgMat2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('test-ng-mat-2 works!');
  });
});
