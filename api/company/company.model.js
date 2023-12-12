var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var companySchema = new Schema(
  {
    companyJson: {
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

module.exports = companySchema;
