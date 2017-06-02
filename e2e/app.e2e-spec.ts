import { HiQParkingV3Page } from './app.po';

describe('hi-qparking-v3 App', () => {
  let page: HiQParkingV3Page;

  beforeEach(() => {
    page = new HiQParkingV3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
