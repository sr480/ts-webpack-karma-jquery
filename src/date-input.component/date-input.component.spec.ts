import { DateInputComponent, leapYear } from './date-input.component';
const $ = require('jquery');

describe('DateInputComponent', () => {
  let fixture;
  let inputElement;
  let subject;
  beforeEach(() => {
    fixture = setFixtures('<input class="date" value="asd">');
    inputElement = fixture.find('.date');
  });
  it('should create', () => {
    subject = new DateInputComponent('.date');
    expect(subject).toBeDefined();
  });
  it('should have empty value in input', () => {
    subject = new DateInputComponent('.date');
    expect(inputElement).toHaveValue('');
  });
  it('should set date', () => {
    const testValue = new Date(2019, 7, 18);
    subject = new DateInputComponent('.date', testValue);
    expect(inputElement).toHaveValue('18.08.2019');
  });
  it('should set hidden on input', () => {
    subject = new DateInputComponent('.date');
    expect(inputElement).toHaveAttr('type', 'hidden');
  });
  it('should create day select', () => {
    subject = new DateInputComponent('.date');
    expect($('.dd-day')).toBeInDOM();
  });
  it('should create month select', () => {
    subject = new DateInputComponent('.date');
    expect($('.dd-month')).toBeInDOM();
  });
  it('should create year select', () => {
    subject = new DateInputComponent('.date');
    expect($('.dd-year')).toBeInDOM();
  });

  describe('leapYear', () => {
    it('should be true for leap years', () => {
      expect(leapYear(2000)).toBeTruthy();
      expect(leapYear(2004)).toBeTruthy();
      expect(leapYear(2008)).toBeTruthy();
      expect(leapYear(2012)).toBeTruthy();
      expect(leapYear(2016)).toBeTruthy();
      expect(leapYear(2008)).toBeTruthy();
      expect(leapYear(1992)).toBeTruthy();
      expect(leapYear(1988)).toBeTruthy();
    });
    it('should be false for non leap year', () => {
      expect(leapYear(2003)).toBeFalsy();
      expect(leapYear(2019)).toBeFalsy();
      expect(leapYear(2021)).toBeFalsy();
    });
  });
});
