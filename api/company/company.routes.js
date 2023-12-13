var Companys = require("../company/company.controller");

module.exports = function (router) {
  router.post("/company/create", Companys.createCompany);
  router.get("/company/get", Companys.getCompanys);
  router.get("/company/get/:strapiId", Companys.getCompany);
  router.put("/company/update/:strapiId", Companys.updateCompany);
  router.delete("/company/remove/:id", Companys.removeCompany);
};
