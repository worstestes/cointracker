import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Currency from './Currency.jsx';
import { Table, ButtonToolbar, Button} from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'


class CryptoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      cryptos: []
    }

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
    let savedCoinId = e.target.id;
    // console.log(e.target.id);
    let coinList = this.state.cryptos;
    let savedCoin = {};
    for(let coin of coinList) {
        if(coin.rank === savedCoinId) {
            savedCoin.name = coin.id;
            savedCoin.symbol = coin.symbol;
            savedCoin.rank = coin.rank;
        }
    }
    let data = JSON.stringify(savedCoin);
    console.log("Sending this data to Server: " + data);
    axios.post('/coins', {
      data: data
    })
    .then((response) => {
      console.log("succcess! " + response)
    })
    .catch((error) => {
      console.log("feels bad man!");
    });

 }


  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(response => {
        const result = response.data.filter(currency => currency.id !== "''");
        // && values.includes(currency.id
        this.setState({
          cryptos: result
        });
        console.log(this.state.cryptos);


      })
      .catch(error => console.log('Error: ' + error));
  }

  render() {
    let currencyInfo = this.state.cryptos.map((currency) => 
        <Currency cryptos={currency} key={currency.id} onClick={this.handleClick}/>
    );
    
    return (
      <div className="crypto-list">
      <h2 className="title">Coin Vault</h2>
      <h6 className="subtitle">Keeping you up-to-date by the hour!</h6>
      <br></br>
        <Table responsive>
            <thead>
                <tr className="headers-data">
                    <th></th>
                    <th>#</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>% (1hr)</th>
                </tr>
            </thead>
        {currencyInfo}
        </Table>
        </div>
    )

}
}

export default CryptoList;