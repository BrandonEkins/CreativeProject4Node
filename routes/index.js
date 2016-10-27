var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("CA4 Server Running");
  res.sendFile('index.html', { root:  'public' });
});
/*
router.get('/getcity',function(req,res,next) {
  fs.readFile(__dirname + '/cities.dat.txt',function(err,data) { 
    if(err) throw err; 
    var myRe = new RegExp("^" + req.query.q.toLowerCase());
    var cities = data.toString().split("\n"); 
    var jsonresult = [];
    for(var i = 0; i < cities.length; i++) {
      var result = cities[i].toLowerCase().search(myRe);
      if(result != -1) {
        jsonresult.push({city:cities[i]});
      }
    } 
    res.status(200).json(jsonresult);
  });
});*/


module.exports = router;
