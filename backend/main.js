// main application file


const { initDatabase } = require('../databases/inventory/inventoryDB')


// Initialize the database
initDatabase().then(() => {
    // Start your Express server or perform other setup tasks
  });