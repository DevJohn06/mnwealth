import { MNWealthWebAppPage } from './app.po';

describe('mnwealth-web-app App', function() {
  let page: MNWealthWebAppPage;

  beforeEach(() => {
    page = new MNWealthWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
