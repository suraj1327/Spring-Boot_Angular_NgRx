import { AppPage }  from './app.po';
 describe('angular2 App', () => {
  let page: AppPage;

  beforeEach((async() => {
    page = new AppPage();
  }));

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to App');
  });
}); 