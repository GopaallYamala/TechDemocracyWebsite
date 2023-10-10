var Heros = require("../home/home.controller");

module.exports = function (router) {
  router.post("/create", Heros.createHome);
  router.get("/get", Heros.getHomes);
  router.get("/get/:name", Heros.getHome);
  router.put("/update/:id", Heros.updateHome);
  router.delete("/remove/:id", Heros.removeHome);
};
