import { Website2016Page } from './app.po';

describe('website2016 App', function() {
  let page: Website2016Page;

  beforeEach(() => {
    page = new Website2016Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
