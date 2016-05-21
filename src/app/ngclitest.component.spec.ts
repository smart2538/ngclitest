import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgclitestAppComponent } from '../app/ngclitest.component';

beforeEachProviders(() => [NgclitestAppComponent]);

describe('App: Ngclitest', () => {
  it('should create the app',
      inject([NgclitestAppComponent], (app: NgclitestAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ngclitest works!\'',
      inject([NgclitestAppComponent], (app: NgclitestAppComponent) => {
    expect(app.title).toEqual('ngclitest works!');
  }));
});
