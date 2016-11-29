
const InventoryRepository = require('../repositories/InventoryRepository');
const inventoryItemDTOAssembler = require('./inventoryItemDTOAssembler');

class InventoryService {
  constructor(repository){
    this.repository = repository;
  }

  getInventory(location_id){        
    return this.repository.inventory(location_id)
                          .then(inventoryItemDTOAssembler.assemble);
  }
}

module.exports = InventoryService;
