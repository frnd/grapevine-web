import { GrapevineWebPage } from './app.po';

describe('grapevine-web App', function() {
  let page: GrapevineWebPage;

  beforeEach(() => {
    page = new GrapevineWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('grapevine-web works!');
  });
});
