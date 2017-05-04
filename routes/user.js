var express = require('express');
var router = express.Router();
var userService = require("../services/user_service.js");
/**
 * @swagger
 * /mongo_api/user/getAccountDetails:
 *   get:
 *     tags:
 *       - User Data
 *     description: get account details of user'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: account details of user
 *
 */
router.get('/getAccountDetails', function(req, res, next) {
      // var email = req.body.email;
      // if(!email)res.send({"error":"email not present"});
      userService.getAccountDetails().then(function (result) {
        res.send(result);
      });
});

/**
 * @swagger
 * /mongo_api/user/getCardHistoryDetails:
 *   get:
 *     tags:
 *       - User Data
 *     description: authenticate'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: authenticate
 *
 */
router.get('/getCardHistoryDetails', function(req, res, next) {
      // var email = req.body.email;
      // if(!email)res.send({"error":"email not present"});
      userService.getCardHistoryDetails().then(function (result) {
        res.send(result);
      });
});
/**
 * @swagger
 * /mongo_api/user/storeCardHistoryDetails:
 *   get:
 *     tags:
 *       - User Data
 *     description: authenticate'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: authenticate
 *
 */
router.get('/storeCardHistoryDetails', function(req, res, next) {
      console.log("inside");
      // var email = req.body.email;
      // if(!email)res.send({"error":"email not present"});
      userService.storeCardHistoryDetails().then(function (result) {
        res.send(result);
      });
});

/**
* @swagger
* definitions:
*   emailid:
*     type: object
*     properties:
*       email:
*         type: string
*         default : Email Id
*
*/
module.exports = router;
