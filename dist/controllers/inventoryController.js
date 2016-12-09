'use strict';

var serviceFactory = require('../services/serviceFactory');
var service = serviceFactory.createInventoryService();

function inventoryController(location_id) {
    return service.getInventory(location_id);
}

module.exports = inventoryController;