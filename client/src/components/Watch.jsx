import React, { Component } from "react";
import $ from 'jquery';
import WatchedCurrency from './WatchedCurrency.jsx';
import { Table, ButtonToolbar, Button} from 'react-bootstrap';
var bodyParser = require('body-parser');
import axios from 'axios';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      watched: [],
      results: [],
      final: [],
    }

  }

  componentDidMount() {
      axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(response => {
      console.log(response);
      const result = response.data;
      this.setState({
        results: result
      })
    })
    .then(() => {
      $.get("/coins", function(coins) {  
      })
      .done(coins => {
        let savedCoins = [];
        for(let coin of coins) {
          savedCoins.push(coin.name);
        }
        const finalCoins = this.state.results.filter((coin) => savedCoins.includes(coin.id));
        console.log(finalCoins);
        this.setState({
          final: finalCoins
        })
      })
    })

}


  render() {
    let savedCurrencyInfo = this.state.final.map((currency) => 
    <WatchedCurrency final={currency} key={currency.symbol} onClick={this.handleClick}/>
);
  return (
    <div className="watched-list">
      <h4 className="watchtitle">Watch List</h4>
      <h4 className="subtitle">Keep in the now with your watchlist!</h4>
    <br></br>
      <Table responsive>
          <thead>
          <tr className="headers-data">
                  <th>#</th>
                  <th>Name</th>
                  <th>Symbol</th>
                  <th>Price</th>
                  <th>Market Cap</th>
                  <th>% (1hr)</th>
              </tr>
          </thead>
      {savedCurrencyInfo}
      </Table>
      </div>
  );
}
}

export default Watch;
