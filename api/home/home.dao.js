var mongoose = require('mongoose');
var homeSchema = require('../home/home.model');

homeSchema.statics = {
    create : function(data, cb) {
        var home = new this(data);
        console.log(cb);
        home.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var homeModel = mongoose.model('Home', homeSchema);
module.exports = homeModel;
