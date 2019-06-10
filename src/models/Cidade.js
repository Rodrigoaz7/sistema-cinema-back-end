
module.exports = (sequelize, DataTypes) => {
  const Sequelize = require('sequelize');
  //const sequelize = require('./index')

  class CidadeModel extends Sequelize.Model {}
  const Cidade = CidadeModel.init({
    nome: Sequelize.STRING,
    sigla_uf: Sequelize.STRING
  }, { sequelize, timestamps: false, modelName: 'cidade' });

  return Cidade;
}