var mongoose = require('mongoose');
var blogSchema = require('../blog/blog.model');

blogSchema.statics = {
    create : function(data, cb) {
        var blog = new this(data);
        console.log(cb);
        blog.save(cb);
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

var blogModel = mongoose.model('Blog', blogSchema);
module.exports = blogModel;
