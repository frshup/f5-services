'use strict';

var Item = require('f5-core/Models/Item');
var InventoryItem = require('f5-core/Models/InventoryItem');
var Inventory = require('f5-core/Models/Inventory');
var Quantity = require('f5-core/Models/Quantity');
var Unit = require('f5-core/Models/Unit');
var Money = require('js-money');

var ItemTypeMapper = {
  "number": Unit.Number,
  "packet": Unit.Packet,
  "piece": Unit.Piece
};

var ItemColumnMapper = {
  "item_id": "id",
  "item_name": "name",
  "item_desc": "desc"
};

function assemble(rows) {
  return rows.map(function (row) {

    var lineItem = item(ItemColumnMapper, row);

    var unit = ItemTypeMapper[row["item_type_id"]];
    var quantity = new Quantity(row["item_quantity"], unit);

    lineItem.quantity = quantity;
    lineItem.price = new Money(row["item_price"], Money.INR);

    return new InventoryItem(lineItem, row["stock_available"]);
  });
}

function item(mapper, row) {
  return Object.keys(mapper).reduce(function (item, column) {
    var attr = mapper[column];

    item[attr] = row[column].toString();

    return item;
  }, new Item());
}

module.exports = { assemble: assemble };