'use strict';

var Item = require('f5-core/Models/Item');
var InventoryItem = require('f5-core/Models/InventoryItem');
var Inventory = require('f5-core/Models/Inventory');
var Quantity = require('f5-core/Models/Quantity');
var Unit = require('f5-core/Models/Unit');
var Money = require('js-money');

function assemble(inventoryItems) {
   return inventoryItems.map(function (inventoryItem) {
      return Object.assign({}, inventoryItem.item, { stockAvailable: inventoryItem.stockAvailable });
   });
}

module.exports = { assemble: assemble };