const { Router } = require("express");
const HighscoreController = require("./src/controllers/HighscoreController");

const routes = Router();

routes.get("/highs", HighscoreController.index);
routes.post("/high", HighscoreController.store);

module.exports = routes;
