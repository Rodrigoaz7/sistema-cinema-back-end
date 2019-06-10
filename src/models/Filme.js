module.exports = (sequelize, DataTypes) => {
    const Sequelize = require('sequelize');
    const Sessao = require('./Sessao');

    class FilmeModel extends Sequelize.Model {}
    const Filme = FilmeModel.init({
        sinopse: Sequelize.STRING,
        titulo: Sequelize.STRING,
        genero: Sequelize.STRING,
        classificacao_etaria: Sequelize.INTEGER,
        avaliacao: Sequelize.FLOAT,
        nacional: Sequelize.BOOLEAN
    }, { sequelize, timestamps: false, modelName: 'filme' });

    // Filme.associate = (models) => {
    //     Filme.hasMany(models.Sessao, {
    //       foreignKey: 'filme_id',
    //       as: 'filme',
    //     });
    // };
  
    return Filme;
  }