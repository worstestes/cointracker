var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('../database-mongo');
let Coin = require('../database-mongo');


var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/coins', function (req, res) {
  Coin.find().sort({rank: 1}).exec()
  .then(function(coins) {
    console.log("Success, coins received from database!");
    res.status(200).send(coins);
  })
  .catch(function(err) {
    console.log(err);
  })
});


app.post('/coins', function (req, res) {
  console.log(JSON.parse(req.body.data));
  let watchedCoin = JSON.parse(req.body.data);
  let savedWatchedCoin = new Coin(watchedCoin);

  savedWatchedCoin.save(function (err, object) {
    if(err) return console.error(err);
    console.log(object);
  })
});

app.get('/*', function(req, res) {
  console.log("Wildcard bill: " + req.body);
  res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

