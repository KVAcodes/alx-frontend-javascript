export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Overriding the valueOf method for automatic conversion to Number object
  valueOf() {
    return Number(this._size);
  }

  // Override the toString method for automatic conversion to a string
  toString() {
    return String(this._location);
  }
}
