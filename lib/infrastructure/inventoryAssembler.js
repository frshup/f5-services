const Item = require('f5-core/Models/Item');
const InventoryItem = require('f5-core/Models/InventoryItem');
const Inventory = require('f5-core/Models/Inventory');
const Quantity = require('f5-core/Models/Quantity');
const Unit = require('f5-core/Models/Unit');
const Money = require('js-money');

const ItemTypeMapper = {
  "number" : Unit.Number,
  "packet" : Unit.Packet,
  "piece" : Unit.Piece
};

const ItemColumnMapper = {
  "item_id" : "id",
  "item_name" : "name",
  "item_desc" : "desc"
};

function assemble(rows){
  return rows.map(row => {
  
    const lineItem = item(ItemColumnMapper, row);

    const unit = ItemTypeMapper[row["item_type_id"]];
    const quantity = new Quantity(row["item_quantity"], unit);

    lineItem.quantity = quantity;
    lineItem.price = new Money(row["item_price"], Money.INR);

    return new InventoryItem(lineItem, row["stock_available"]);
  });
}

function item(mapper, row) {
  return Object.keys(mapper).reduce((item, column) => {
    var attr = mapper[column];

    item[attr] = row[column].toString();

    return item;
  }, new Item());
}

module.exports = {assemble};
