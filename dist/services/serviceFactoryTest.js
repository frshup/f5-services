'use strict';

var serviceFactory = require('./serviceFactory');

var service = serviceFactory.createInventoryService();

service.getInventory(101).then(function (res) {
       return console.log(res);
});