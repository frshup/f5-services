class InventoryItemDto {
  constructor() {
      this._id = '';
      this._name = '';
      this._desc = '';
      this._available = null;
      this._price = null;
  }

  get id() { return this._id; }
  set id(value) { this._id = value; }

  get name() { return this._name; }
  set name(value) { this._name = value; }

  get desc() { return this._desc; }
  set desc(value) { this._desc = value; }

  get available() { return this._quantity; }
  set available(value) { this._quantity = value }

  get price() { return this._price; }
  set price(value) { this._price = value; }
}

module.exports = InventoryItemDto;
