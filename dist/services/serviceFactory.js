'use strict';

var DBInventoryRepository = require('../infrastructure/DBInventoryRepository');
var InventoryService = require('./InventoryService');
var settings = require('../infrastructure/DBSettings');

function createInventoryService() {
  return new InventoryService(new DBInventoryRepository(settings));
}

module.exports = { createInventoryService: createInventoryService };