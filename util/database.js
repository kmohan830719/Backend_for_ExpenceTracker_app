const Sequelize=require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Kmohan@180', {
    host: 'localhost',
    dialect: 'mysql',
  });


module.exports= sequelize;