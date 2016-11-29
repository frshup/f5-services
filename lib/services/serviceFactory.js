const DBInventoryRepository = require('../infrastructure/DBInventoryRepository');
const InventoryService = require('./InventoryService');
const settings = require('../infrastructure/DBSettings');

function createInventoryService(){
  return new InventoryService(new DBInventoryRepository(settings));
}

module.exports = {createInventoryService:createInventoryService}
