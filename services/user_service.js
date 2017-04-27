var mongoose = require( 'mongoose' );
var User = mongoose.model('users');
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
