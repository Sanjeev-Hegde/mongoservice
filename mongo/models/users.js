var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	email: {type: String, unique: true},
	password: {type: String, unique: false}
});

var users = module.exports = mongoose.model('users', UserSchema);
