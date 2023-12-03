export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // changes the default string representation of a string
  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
