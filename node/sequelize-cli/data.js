const Sequelize = require('sequelize');

const sequelize = new Sequelize('tmall', 'root', '1234567890', {
  host: '127.0.0.1',
  dialect: 'mysql'
});


const Shop = sequelize.define('shops',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  thumb_url: Sequelize.STRING,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE
},
  {
    tableName: 'shops',
    timestamps: false,
  },

)

async function CreateShops(shop) {
  return Shop.create(shop)
}


async function SearchShopById(id) {
  return Shop.findByPk(id)
}

module.exports = {
  CreateShops,
  SearchShopById
}

 

