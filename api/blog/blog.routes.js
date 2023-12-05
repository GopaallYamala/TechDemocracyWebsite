var Blogs = require("../blog/blog.controller");

module.exports = function (router) {
  router.post("/blog/create", Blogs.createBlog);
  router.get("/blog/get", Blogs.getBlogs);
  router.get("/blog/get/:strapiId", Blogs.getBlog);
  router.put("/blog/update/:strapiId", Blogs.updateBlog);
  router.delete("/blog/remove/:id", Blogs.removeBlog);
};
