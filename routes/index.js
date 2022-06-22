var express = require('express');
var router = express.Router();

var request = require('request');

/* GET home page. */
router.get('/alive', function(req, res, next) {
  res.json({message: 'alive'});
});

router.get('/api/:serverName/:character', function(req, res) {
  var character = req.params.character;
  var serverName = req.params.serverName;

  request('https://armory.warmane.com/api/character/'+ character +'/'+ serverName +'/profile', { json: true }, (err, rres, body) => {
    if (err) {
      res.json({ error: true, online: false }); 
    }
    else {
      if(body.error != null) {
        res.json({ error: true, online: false });
      }
      else {
        res.json({ error: false, online: body.online });
      }
    }
  });
});

module.exports = router;
