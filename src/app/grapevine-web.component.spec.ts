import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GrapevineWebAppComponent } from '../app/grapevine-web.component';

beforeEachProviders(() => [GrapevineWebAppComponent]);

describe('App: GrapevineWeb', () => {
  it('should create the app',
      inject([GrapevineWebAppComponent], (app: GrapevineWebAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'grapevine-web works!\'',
      inject([GrapevineWebAppComponent], (app: GrapevineWebAppComponent) => {
    expect(app.title).toEqual('grapevine-web works!');
  }));
});
