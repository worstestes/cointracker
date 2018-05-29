var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/watchedCoins');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
  console.log(Coin);
});

var coinSchema = mongoose.Schema({
  name: {type: String, index: {unique: true}},
  symbol: String
});

var Coin = mongoose.model('Coin', coinSchema);

var selectAll = function(callback) {
  Coin.find({}, function(err, coins) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, coins);
    }
  });
};

module.exports = Coin;
module.exports.selectAll = selectAll;