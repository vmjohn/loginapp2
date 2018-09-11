import { LoginAPP2Page } from './app.po';

describe('login-app2 App', function() {
  let page: LoginAPP2Page;

  beforeEach(() => {
    page = new LoginAPP2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
