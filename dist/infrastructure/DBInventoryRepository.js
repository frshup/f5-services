'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mysql = require('promise-mysql');
var InventoryRepository = require('../repositories/InventoryRepository');
var inventoryAssembler = require('./inventoryAssembler');

var QUERY_INVENTORY_ITEMS = 'SELECT item.item_id,\n       item.item_name,\n       item.item_type_id,\n       item.item_desc,\n       item.item_quantity,\n       item.item_price,\n       item.item_currency_code,\n       inv_item.inventory_item_id,\n       inv_item.quantity \'stock_available\'\n       FROM freshupcenter.center_item item,\n\t\t\t  freshupcenter.center_inventory_item inv_item\n\t\t WHERE item.item_id = inv_item.item_id';

var DBInventoryRepository = function (_InventoryRepository) {
    _inherits(DBInventoryRepository, _InventoryRepository);

    function DBInventoryRepository(settings) {
        _classCallCheck(this, DBInventoryRepository);

        var _this = _possibleConstructorReturn(this, (DBInventoryRepository.__proto__ || Object.getPrototypeOf(DBInventoryRepository)).call(this));

        _this.settings = settings;
        return _this;
    }

    _createClass(DBInventoryRepository, [{
        key: 'inventory',
        value: function inventory(location_id) {
            var conn = null;
            return mysql.createConnection(this.settings).then(function (connection) {
                conn = connection;
                return connection.query(QUERY_INVENTORY_ITEMS);
            }).then(inventoryAssembler.assemble).finally(function (res) {
                if (conn !== null) conn.destroy();
            });
        }
    }]);

    return DBInventoryRepository;
}(InventoryRepository);

module.exports = DBInventoryRepository;