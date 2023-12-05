var Blog = require("../blog/blog.dao");

exports.createBlog = function (req, res, next) {
  let blog = {
    blogJson: req.body.jsonObject,
    strapiId: req.body.strapiId,
  };
  Blog.create(blog, function (err, blog) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Blog created successfully",
    });
  });
};

exports.getBlogs = function (req, res, next) {
  Blog.get({}, function (err, blogs) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      blogs: blogs,
    });
  });
};

exports.getBlog = function (req, res, next) {
  Blog.get({ strapiId: req.params.strapiId }, function (err, blogs) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      blogs: blogs,
    });
  });
};

exports.updateBlog = function (req, res, next) {
  let blog = {
    blogJson: req.body.jsonObject,
    strapiId: req.body.strapiId,
  };
  Blog.update({ strapiId: req.params.strapiId }, blog, function (err, blog) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Blog updated successfully",
    });
  });
};

exports.removeBlog = function (req, res, next) {
  Blog.delete({ _id: req.params.id }, function (err, blog) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Blog deleted successfully",
    });
  });
};
