var mongoose = require("mongoose");
var resourceSchema = require("../resource/resource.model");

resourceSchema.statics = {
  create: function (data, cb) {
    var resource = new this(data);
    console.log(cb);
    resource.save(cb);
  },

  get: function (query, cb) {
    this.find(query, cb);
  },

  getByName: function (query, cb) {
    this.find(query, cb);
  },

  updateOne: function (query, updateData, cb) {
    console.log("query>>>".query);
    console.log("updateData>>>".updateData);
    console.log("cb>>>".cb);
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },
  delete: function (query, cb) {
    this.findOneAndDelete(query, cb);
  },
};

var resourceModel = mongoose.model("resource", resourceSchema);
module.exports = resourceModel;
