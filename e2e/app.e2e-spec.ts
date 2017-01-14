import { Dev2Page } from './app.po';

describe('dev2 App', function() {
  let page: Dev2Page;

  beforeEach(() => {
    page = new Dev2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
