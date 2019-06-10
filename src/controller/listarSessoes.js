
const Sessao = require('./../models').sessoes;
const Filme = require('./../models/Filme').filme;
const sequelize = require('./../models').sequelize;

exports.listarSessoes = async (req, res) => {
    sessoes = await sequelize.query(
        "SELECT * FROM sessoes INNER JOIN filmes ON filmes.id = sessoes.filme_id " +
        " WHERE sessoes.cinema_id = " + req.params.idCinema, 
        { type: sequelize.QueryTypes.SELECT}
    )
    return res.status(200).json({sessoes: sessoes});
}