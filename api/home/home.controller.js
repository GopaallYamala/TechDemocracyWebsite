var Home = require("../home/home.dao");

exports.createHome = function (req, res, next) {
  var home = {
    name: req.body.name,
    description: req.body.description,
  };

  Home.create(home,
    function (err, home) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Home created successfully",
    });
  }
  );
};

exports.getHomes = function (req, res, next) {
  Home.get({}, function (err, homes) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      homes: homes,
    });
  });
};

exports.getHome = function (req, res, next) {
  Home.get({ name: req.params.name }, function (err, homes) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      homes: homes,
    });
  });
};

exports.updateHome = function (req, res, next) {
  var home = {
    name: req.body.name,
    description: req.body.description,
  };
  Home.update({ _id: req.params.id }, home, function (err, home) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Home updated successfully",
    });
  });
};

exports.removeHome = function (req, res, next) {
  Home.delete({ _id: req.params.id }, function (err, home) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Home deleted successfully",
    });
  });
};
