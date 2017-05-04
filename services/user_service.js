var mongoose = require( 'mongoose' );
var User = mongoose.model('users');
var Accounts = mongoose.model('accounts');
var Transactionhistory = mongoose.model('ths');
var q = require('q');

exports.registerUser = function(email,password) {
      var deferred = q.defer();
      var user = new User({
        email: email,
      	password: password
      });
  		user.save(function(err) {
  			if (err) {
          console.log("Mongo Error:"+ err);
          deferred.reject(err);
        }
        else
        deferred.resolve({"Message":"New User reference addded"});
      });
      return deferred.promise;
};
exports.authenticate = function(email,password) {
      var deferred = q.defer();
  		User.findOne({ email: email,password:password }, function (err, res) {
  			if (err) {
  				deferred.reject(err);
  			} else {
  				deferred.resolve(res);
  			}
  		});
  return deferred.promise;
};
exports.getAccountDetails = function() {
      var deferred = q.defer();
  		Accounts.find({}, function (err, res) {
  			if (err) {
  				deferred.reject(err);
  			} else {
  				deferred.resolve(res);
  			}
  		});
  return deferred.promise;
};
exports.getCardHistoryDetails = function() {
      var deferred = q.defer();
      //console.log(email);
  		Transactionhistory.find({}, function (err, res) {
        console.log(err);
  			if (err) {
  				deferred.reject(err);
  			} else {
  				deferred.resolve(res);
  			}
  		});
  return deferred.promise;
};
exports.storeCardHistoryDetails = function() {
      var deferred = q.defer();
      var th = new Transactionhistory({
        email: "prince@gmail.com",
      	location: "E-cart"
      });
  		th.save(function(err) {
  			if (err) {
          console.log("Mongo Error:"+ err);
          deferred.reject(err);
        }
        else
        deferred.resolve({"Message":"New th reference addded"});
      });
      return deferred.promise;
};