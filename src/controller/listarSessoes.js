
const Sessao = require('./../models').sessoes;
const Filme = require('./../models/Filme').filme;
const sequelize = require('./../models').sequelize;

exports.listarSessoes = async (req, res) => {

    let query = "SELECT * FROM sessoes INNER JOIN filmes f ON f.id = sessoes.filme_id " +
    " WHERE sessoes.cinema_id = " + req.params.idCinema;

    if(req.query.classificacao_etaria) {
        query += " AND f.classificacao_etaria >= " + req.query.classificacao_etaria;
    }

    sessoes = await sequelize.query(
        query, { type: sequelize.QueryTypes.SELECT}
    )

    return res.status(200).json({sessoes: sessoes});
}