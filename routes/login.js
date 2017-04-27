var express = require('express');
var router = express.Router();
var userService = require("../services/user_service.js");
/**
 * @swagger
 * /mongo_api/login/register:
 *   post:
 *     tags:
 *       - Login
 *     description: Register New User'
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: register
 *         description: register
 *         in: body
 *         required: true
 *         type: string
 *         schema:
 *          $ref: '#/definitions/register'
 *     responses:
 *       200:
 *         description: Register New User
 *
 */
router.post('/register', function(req, res, next) {
      var email = req.body.email;
      var password = req.body.password;
      if(!email)res.send({"error":"email not present"});
      if(!password)res.send({"error":"password not present"});
      userService.registerUser(email,password).then(function (result) {
        res.send({"message":"New user with id:`"+email+"` registered successfully"});
      });
});

/**
 * @swagger
 * /mongo_api/login/authenticate:
 *   post:
 *     tags:
 *       - Login
 *     description: authenticate'
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: authenticate
 *         description: authenticate
 *         in: body
 *         required: true
 *         type: string
 *         schema:
 *          $ref: '#/definitions/authenticate'
 *     responses:
 *       200:
 *         description: authenticate
 *
 */
router.post('/authenticate', function(req, res, next) {
      var email = req.body.email;
      var password = req.body.password;
      if(!email)res.send({"error":"email not present"});
      if(!password)res.send({"error":"password not present"});
      userService.authenticate(email,password).then(function (result) {
        //console.log("logging:"+result);
        if(result)res.send({"status":"AuthenticationSuccess","message":"Welcome "+email});
        else
        res.send({"status":"AuthenticationFailed","message":"username or password is incorrect"});
      });
});

/**
* @swagger
* definitions:
*   register:
*     type: object
*     properties:
*       email:
*         type: string
*         default : Email Id
*       password:
*         type: string
*         default : 1234
*
*/
module.exports = router;
