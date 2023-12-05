var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var blogSchema = new Schema(
  {
    blogJson: {
      type: String,
      unique: false,
      required: true,
    },
    strapiId: {
      type: Number,
      unique: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = blogSchema;
