module.exports = (sequelize, DataTypes) => {

    //const Filme = require('./Filme');
    const Sequelize = require('sequelize');
  
    class SessaoModel extends Sequelize.Model {}
    const Sessao = SessaoModel.init({
        horario: Sequelize.TIME,
        inicio: Sequelize.DATE,
        fim: Sequelize.DATE,
        filme_id: Sequelize.BIGINT,
        cinema_id: Sequelize.BIGINT
    }, { sequelize, timestamps: false, modelName: 'sessoes' });

    // Sessao.associate = (models) => {
    //     Sessao.belongsTo(models.filme, {
    //       foreignKey: 'filme_id',
    //       as: 'filme',
    //     });
    // };

    //Sessao.belongsTo(Filme, {foreignKey: 'filme_id', as: 'filme'});

    return Sessao;
  }