const Router = require("express");

const PartidaController = require("../controllers/PartidaController")

const partidaRoutes = Router()

const partidaController = new PartidaController()

partidaRoutes.post('/create-partida', partidaController.create);

partidaRoutes.delete('/remove-partida/:id', partidaController.delete);

partidaRoutes.put('/edit-partida/:id', partidaController.update);

partidaRoutes.get("/find-partida/:id", partidaController.find);

module.exports = partidaRoutes
