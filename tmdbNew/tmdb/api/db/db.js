const Sequelize = require('sequelize');

const db = new Sequelize('grupoimas','grupoimas_user',"fzqtaTzzWp2bsBmoclU0KZRtrYyUpgsN",{
    host: 'dpg-ch3bv6d269v61f9r5e8g-a',
    dialect: 'postgres',
    logging: false,
  }
);

module.exports = db;
