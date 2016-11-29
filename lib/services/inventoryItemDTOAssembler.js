const Item = require('f5-core/Models/Item');
const InventoryItem = require('f5-core/Models/InventoryItem');
const Inventory = require('f5-core/Models/Inventory');
const Quantity = require('f5-core/Models/Quantity');
const Unit = require('f5-core/Models/Unit');
const Money = require('js-money');

function assemble(inventoryItems){
    return inventoryItems.map(inventoryItem => {
       return Object.assign({}, inventoryItem.item, {stockAvailable:inventoryItem.stockAvailable});
    });
}

module.exports = {assemble};
