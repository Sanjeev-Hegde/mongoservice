var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var ThSchema = new Schema({
	email: {type: String},
    location : {type: String}
});

var th = module.exports = mongoose.model('ths', ThSchema);
