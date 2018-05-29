var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('../database-mongo');
let Coin = require('../database-mongo');


var app = express();
app.use(bodyParser.json()); // support json encoded bodies
 
app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/coins', function (req, res) {
  console.log(JSON.parse(req.body.data));
  let watchedCoin = JSON.parse(req.body.data);
  let savedWatchedCoin = new Coin(watchedCoin);

  savedWatchedCoin.save(function (err, object) {
    if(err) return console.error(err);
    console.log(object);
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

