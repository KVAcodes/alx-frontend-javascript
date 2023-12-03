import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and setter for the amount attribute
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter and setter for the currency attribute
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (newCurrency.constructor !== (new Currency('fish', 'fishdollar')).constructor) {
      throw new TypeError('Not a Currency');
    }
    this._currency = newCurrency;
  }

  // Instance method displayFullPrice
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method convertPrice
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
