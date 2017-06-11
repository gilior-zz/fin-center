import { FinCenterPage } from './app.po';

describe('fin-center App', () => {
  let page: FinCenterPage;

  beforeEach(() => {
    page = new FinCenterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to lg!!');
  });
});
