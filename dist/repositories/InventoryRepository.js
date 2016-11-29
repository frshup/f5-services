'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Inventory = require('f5-core/Models/Inventory');

var InventoryRepository = function () {
  function InventoryRepository() {
    _classCallCheck(this, InventoryRepository);
  }

  _createClass(InventoryRepository, [{
    key: 'inventory',
    value: function inventory(location_id) {
      console.log('inventory');
    }
  }, {
    key: 'findItem',
    value: function findItem(item_id) {}
  }, {
    key: 'updateItem',
    value: function updateItem(item) {}
  }]);

  return InventoryRepository;
}();

module.exports = InventoryRepository;