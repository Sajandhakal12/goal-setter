const Router = require("express").Router();
const indexController = require("../controllers/index.js");

Router.get("/", indexController.showIndex);

Router.get("/sajan", indexController.dataShow);

Router.get("/form", indexController.formShow);

Router.delete("/form/:id",indexController.deleteGoal);

Router.post("/form", indexController.formSubmit);
//get post (put/patch)---->update	


module.exports = Router;