'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InventoryRepository = require('../repositories/InventoryRepository');
var inventoryItemDTOAssembler = require('./inventoryItemDTOAssembler');

var InventoryService = function () {
  function InventoryService(repository) {
    _classCallCheck(this, InventoryService);

    this.repository = repository;
  }

  _createClass(InventoryService, [{
    key: 'getInventory',
    value: function getInventory(location_id) {
      return this.repository.inventory(location_id).then(inventoryItemDTOAssembler.assemble);
    }
  }]);

  return InventoryService;
}();

module.exports = InventoryService;