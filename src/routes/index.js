const controllerCinema = require('./../controller/listarCinemas');
const controllerCidade = require('./../controller/listarCidades');
const controllerSessao = require('./../controller/listarSessoes');

module.exports = (application) => {
    application.get('/cinemas/:idCidade', (req, res) => {
        controllerCinema.listarCinemas(req, res);
    });

    application.get('/cinemas', (req, res) => {
        controllerCinema.listarCinemas(req, res);
    });

    application.get('/cidades', (req, res) => {
        controllerCidade.listarCidades(req, res);
    });

    application.get('/sessoes/:idCinema', (req, res) => {
        controllerSessao.listarSessoes(req, res);
    });
}