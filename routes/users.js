var express = require("express");
var router = express.Router();

/**
 * This function comment is parsed by doctrine
 * @group User - Operations about User
 * @route GET /users
 * @returns {object} 200 - {message: 'Ok...!'}
 */
router.get("/", function (req, res, next) {
  res.send({ message: "Ok...!" });
});

/**
 * @typedef User
 * @property {string} name.required - user's name
 * @property {string} gender.required - user's gender
 * @property {string} city.required - user's city
 * @property {Array.<string>} hobby.required - user's hobbies
 */
/**
 * This function comment is parsed by doctrine
 * @group User - Operations about User
 * @route POST /users
 * @param {User.model} body.body.required - user's object
 * @returns {object} 200 - success result of db
 */
router.post("/", function (req, res, next) {
  res.send(req.body);
});

module.exports = router;
