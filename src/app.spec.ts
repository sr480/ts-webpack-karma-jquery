import { App } from './app';

describe('AppStart', () => {
  let subject;
  beforeEach(() => {
    subject = new App();
  });
  it('should create', () => {
    expect(subject).toBeDefined();
  });
});
