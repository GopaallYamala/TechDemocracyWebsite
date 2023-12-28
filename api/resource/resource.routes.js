var Resources = require("../resource/resource.controller");

module.exports = function (router) {
  router.post("/resource/create", Resources.createResource);
  router.get("/resource/get", Resources.getResources);
  router.get("/resource/get/:id", Resources.getResource);
  router.put("/resource/update/:id", Resources.updateResource);
  router.delete("/resource/remove/:id", Resources.removeResource);
};
