
const Cidade = require('./../models').cidade;

exports.listarCidades = async (req, res) => {
    const cidades = await Cidade.findAll();
    return res.status(200).json({cidades: cidades});
}