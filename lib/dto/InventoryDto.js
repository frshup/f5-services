const InventoryItemDto = require('./InventoryItemDto');

class InventoryDto {
    constructor(location_id, items){
      this._location_id = location_id;
      this._items = items;
    }

    get items() { return this._items; }
    set items(value) { this._items = value; }
}

module.exports = InventoryDto;
