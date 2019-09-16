var express = require('express');
var router = express.Router();

var IndexController = require("../controller/indexcontroller");
var indexController = new IndexController();

/* GET home page. */
router.get('/', function(req, res, next) {
    indexController.index(req,res,next);
});
router.post('/', function(req, res, next) {
    indexController.search(req,res,next);
});

module.exports = router;
