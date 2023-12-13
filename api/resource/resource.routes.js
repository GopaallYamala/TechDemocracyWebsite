var Resources = require("../resource/resource.controller");

module.exports = function (router) {
  router.post("/resource/create", Resources.createResource);
  router.get("/resource/get", Resources.getResources);
  router.get("/resource/get/:strapiId", Resources.getResource);
  router.put("/resource/update/:strapiId", Resources.updateResource);
  router.delete("/resource/remove/:id", Resources.removeResource);
};
