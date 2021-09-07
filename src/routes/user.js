"use strict";
exports.__esModule = true;
var express_1 = require("express");
var user_controller_1 = require("../controllers/user_controller");
var router = express_1["default"].Router();
router.get('/employees', user_controller_1["default"].getUsers);
exports["default"] = router;
