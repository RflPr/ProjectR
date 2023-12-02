const { Sequelize } = require('sequelize');
const createProductModel = require('../models/product'); // Ajuste o caminho conforme necessário

// Configuração do Sequelize
const sequelize = new Sequelize('mysql2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Use a função criada para definir o modelo Product
const Product = createProductModel(sequelize);

// Sincronize o modelo com o banco de dados
sequelize.sync().then(() => {
  console.log('Modelo sincronizado com o banco de dados.');
});

// Exporte o objeto Sequelize e o modelo Product
module.exports = { sequelize, Product };
