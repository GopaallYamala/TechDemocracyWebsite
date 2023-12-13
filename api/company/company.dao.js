var mongoose = require('mongoose');
var companySchema = require('../company/company.model');

companySchema.statics = {
    create : function(data, cb) {
        var company = new this(data);
        console.log(cb);
        company.save(cb);
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

var companyModel = mongoose.model('Company', companySchema);
module.exports = companyModel;
