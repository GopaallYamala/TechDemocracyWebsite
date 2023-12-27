var Resource = require("../resource/resource.dao");

exports.createResource = function (req, res, next) {
  let resource = {
    resourceJson: req.body.jsonObject,
  };
  Resource.create(resource, function (err, resource) {
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

exports.getResources = function (req, res, next) {
  Resource.get({}, function (err, resources) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      resources: resources,
    });
  });
};

exports.getResource = function (req, res, next) {
  Resource.get({ _id: req.params._id }, function (err, resources) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      resources: resources,
    });
  });
};

exports.updateResource = function (req, res, next) {
  Resource.updateOne(
    { _id: req.body._id },
    req.body.resourceJson,
    function (err, resource) {
      if (err) {
        res.json({
          error: err,
        });
      }
      res.json({
        resource: "updated successfully",
      });
    }
  );
};

exports.removeResource = function (req, res, next) {
  Resource.delete({ _id: req.params.id }, function (err, resource) {
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
