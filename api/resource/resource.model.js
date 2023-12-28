var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var resourceSchema = new Schema(
  {
    resourceJson: {
      type: String,
      unique: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = resourceSchema;
