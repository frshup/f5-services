const serviceFactory = require('./serviceFactory');

const service = serviceFactory.createInventoryService();

service.getInventory(101)
       .then(res => console.log(res));
