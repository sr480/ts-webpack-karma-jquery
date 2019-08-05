const $ = require('jquery');

const monthes = [
  '01-January',
  '02-Febrary',
  '03-March',
  '04-April',
  '05-May',
  '06-June',
  '07-July',
  '08-August',
  '09-September',
  '10-October',
  '11-November',
  '12-December'
];
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function leapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export class DateInputComponent {
  private _element;
  private _dayElement;
  private _monthElement;
  private _yearElement;

  constructor(selector: string | any, defaultDate?: Date) {
    this._element = $(selector);
    this._element.attr('type', 'hidden');
    if (!defaultDate) {
      this._element.val('');
    } else {
      this._element.val(dateToString(defaultDate));
    }
    this._createDaySelect();
    this._createMonthSelect();
    this._createYearSelect();
  }

  private _createDaySelect() {
    this._dayElement = $('<select class="dd-day"></select>');
    this._element.parent().append(this._dayElement);
  }
  private _createMonthSelect() {
    this._monthElement = $('<select class="dd-month"></select>');
    this._element.parent().append(this._monthElement);
  }
  private _createYearSelect() {
    this._yearElement = $('<select class="dd-year"></select>');
    this._element.parent().append(this._yearElement);
  }
}
function dateToString(date: Date): string {
  return ('00' + date.getDate()).slice(-2) + '.' +
         ('00' + (date.getMonth() + 1)).slice(-2) + '.' +
         date.getFullYear();
}
