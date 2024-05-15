const Router = require("express");

const TimeController = require("../controllers/TimeController")

const timesRoutes = Router()

const timeController = new TimeController()

timesRoutes.post('/create-time', timeController.create);

timesRoutes.delete('/remove-time/:id', timeController.delete);

timesRoutes.put('/edit-time/:id', timeController.update);

timesRoutes.get("/find-time/:id", timeController.find);

module.exports = timesRoutes
