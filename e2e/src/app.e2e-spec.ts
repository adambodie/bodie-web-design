import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to Bodie-Web-Design!');
=======
    expect(page.getParagraphText()).toEqual('Welcome to bodieWebDesign!');
>>>>>>> 78669965e0a833fc1617a0ee441744bbae60016e
  });
});
