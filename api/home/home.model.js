var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var homeSchema = new Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    description : {
        type: String,
        unique : false,
        required : true
    }
}, {
    timestamps: true
});

module.exports = homeSchema;
