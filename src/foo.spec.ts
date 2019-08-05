import { foo } from './foo';

describe('some test', () => {
  let fixture;
  beforeEach(() => {
    fixture = setFixtures('<div class="boo">koo</div>');
  });
  it('should pass', () => {
    expect(foo()).toBe(1);
  });
  xit('should fail', () => {
    expect(foo()).toBe(2);
  });
  it('should return 1', () => {
    expect(foo()).toBe(1);
  });
  it('should contain text koo', () => {
    const element = fixture.find('.boo');
    expect(element).toBeTruthy();
    expect(element).toContainText('koo');
  });
});
