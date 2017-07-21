import { AgendaAngularPage } from './app.po';

describe('agenda-angular App', () => {
  let page: AgendaAngularPage;

  beforeEach(() => {
    page = new AgendaAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
