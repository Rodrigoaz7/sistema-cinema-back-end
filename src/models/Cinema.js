module.exports = (sequelize, DataTypes) => {
    const Sequelize = require('sequelize');
  
    class CinemaModel extends Sequelize.Model {}
    const Cinema = CinemaModel.init({
        nome: Sequelize.STRING,
        rede: Sequelize.STRING,
        cidade_id: Sequelize.BIGINT
    }, { sequelize, timestamps: false, modelName: 'cinema' });
  
    return Cinema;
  }