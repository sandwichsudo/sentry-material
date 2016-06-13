import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TestNgMat2AppComponent } from '../app/test-ng-mat-2.component';

beforeEachProviders(() => [TestNgMat2AppComponent]);

describe('App: TestNgMat2', () => {
  it('should create the app',
      inject([TestNgMat2AppComponent], (app: TestNgMat2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'test-ng-mat-2 works!\'',
      inject([TestNgMat2AppComponent], (app: TestNgMat2AppComponent) => {
    expect(app.title).toEqual('test-ng-mat-2 works!');
  }));
});
