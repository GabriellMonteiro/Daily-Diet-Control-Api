const {Router} = require("express");
const partidaRoutes = require('./partidas.routes');
const jogadorRoutes = require('./jogadores.routes');
const timeRoustes = require('./times.routes');

const routes = Router();

 routes.use("/api/v1/jogadores", jogadorRoutes);

 routes.use("/api/v1/partidas", partidaRoutes);

 routes.use("/api/v1/times", timeRoustes);

module.exports = routes;