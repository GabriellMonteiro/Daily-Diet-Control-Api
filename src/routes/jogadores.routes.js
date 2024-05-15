const Router = require("express");

const JogadorController = require("../controllers/JogadorController")

const jogadorRoutes = Router()

const jogadorController = new JogadorController()

jogadorRoutes.post('/create-jogador', jogadorController.create);

jogadorRoutes.delete('/remove-jogador/:id', jogadorController.delete);

jogadorRoutes.put('/edit-jogador/:id', jogadorController.update);

jogadorRoutes.get("/find-jogadores/:id", jogadorController.find);

module.exports = jogadorRoutes
