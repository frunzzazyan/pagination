var express = require('express');
var router = express.Router();

const UsersControllers = require("../controllers/UsersControllers.js")
const controllers = new UsersControllers()
/* GET home page. */
router.get('/', controllers.getUsers);
router.get('/sort', controllers.sortUsersAge);
router.get('/:page', controllers.getPage);

module.exports = router;
