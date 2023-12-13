var Company = require("../company/company.dao");

exports.createCompany = function (req, res, next) {
  let company = {
    companyJson: req.body.jsonObject,
    strapiId: req.body.strapiId,
  };
  Company.create(company, function (err, company) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "created successfully",
    });
  });
};

exports.getCompanys = function (req, res, next) {
  Company.get({}, function (err, companys) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      companys: companys,
    });
  });
};

exports.getCompany = function (req, res, next) {
  Company.get({ strapiId: req.params.strapiId }, function (err, companys) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      companys: companys,
    });
  });
};

exports.updateCompany = function (req, res, next) {
  let company = {
    companyJson: req.body.jsonObject,
    strapiId: req.body.strapiId,
  };
  Company.update({ strapiId: req.params.strapiId }, company, function (err, company) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "updated successfully",
    });
  });
};

exports.removeCompany = function (req, res, next) {
  Company.delete({ _id: req.params.id }, function (err, company) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Deleted successfully",
    });
  });
};
