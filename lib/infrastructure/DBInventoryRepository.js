
const mysql = require('promise-mysql');
const InventoryRepository = require('../repositories/InventoryRepository');
const inventoryAssembler = require('./inventoryAssembler');

const QUERY_INVENTORY_ITEMS =
`SELECT item.item_id,
       item.item_name,
       item.item_type_id,
       item.item_desc,
       item.item_quantity,
       item.item_price,
       item.item_currency_code,
       inv_item.inventory_item_id,
       inv_item.quantity 'stock_available'
       FROM freshupcenter.center_item item,
			  freshupcenter.center_inventory_item inv_item
		 WHERE item.item_id = inv_item.item_id`;

class DBInventoryRepository extends InventoryRepository {
    constructor(settings){
        super();
        this.settings = settings;
    }

    inventory(location_id){
        let conn = null;
        return mysql.createConnection(this.settings)
                    .then((connection) =>
                      {
                        conn = connection;
                        return connection.query(QUERY_INVENTORY_ITEMS);
                      })
                      .then(inventoryAssembler.assemble)
                      .finally((res) => {
                        if (conn !== null) conn.destroy();                        
                      });

    }
}

module.exports = DBInventoryRepository;
