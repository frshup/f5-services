'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InventoryItemDto = function () {
    function InventoryItemDto() {
        _classCallCheck(this, InventoryItemDto);

        this._id = '';
        this._name = '';
        this._desc = '';
        this._available = null;
        this._price = null;
    }

    _createClass(InventoryItemDto, [{
        key: 'id',
        get: function get() {
            return this._id;
        },
        set: function set(value) {
            this._id = value;
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        },
        set: function set(value) {
            this._name = value;
        }
    }, {
        key: 'desc',
        get: function get() {
            return this._desc;
        },
        set: function set(value) {
            this._desc = value;
        }
    }, {
        key: 'available',
        get: function get() {
            return this._quantity;
        },
        set: function set(value) {
            this._quantity = value;
        }
    }, {
        key: 'price',
        get: function get() {
            return this._price;
        },
        set: function set(value) {
            this._price = value;
        }
    }]);

    return InventoryItemDto;
}();

module.exports = InventoryItemDto;