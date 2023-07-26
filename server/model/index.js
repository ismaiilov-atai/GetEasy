const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_db', 'atai_ismaiilov', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

  

module.exports = sequelize;