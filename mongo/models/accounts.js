var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var AccountsSchema = new Schema({
	email: {type: String},
    availableCredit : {type: Number},
    nextPaymentDate : {type: String},
    lastPaymentAmount: {type: Number},
    lastPaymentDate : {type: String}
});

var accounts = module.exports = mongoose.model('accounts', AccountsSchema);
