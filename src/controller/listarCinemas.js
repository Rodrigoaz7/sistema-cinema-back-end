
const Cinema = require('./../models').cinema;

exports.listarCinemas = async (req, res) => {

    let cinemas = [];

    if(req.params.idCidade) {
        cinemas = await Cinema.findAll({
            where: {
                cidade_id: req.params.idCidade
            }
        })
    } else {
        cinemas = await Cinema.findAll();
    }
   
    return res.status(200).json({cinemas: cinemas});
}