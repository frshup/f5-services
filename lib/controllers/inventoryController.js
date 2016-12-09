const serviceFactory = require('../services/serviceFactory');
const service = serviceFactory.createInventoryService();

function inventoryController(location_id){
    return service.getInventory(location_id);
}

module.exports = inventoryController;
