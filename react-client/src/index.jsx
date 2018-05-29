import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Currency from './components/List.jsx';
import { Table, ButtonToolbar, Button} from 'react-bootstrap';
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      cryptos: []
    }

    this.handleClick = this.handleClick.bind(this);

  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }


  handleClick(e) {
    let savedCoinId = e.target.id;
    // console.log(e.target.id);
    let coinList = this.state.cryptos;
    let savedCoin = {};
    for(let coin of coinList) {
        if(coin.rank === savedCoinId) {
            savedCoin.name = coin.id;
            savedCoin.symbol = coin.symbol;
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

    // $.ajax({
    //     method: 'POST',
    //     url: '/items',
    //     contentType: 'application/json',
    //     data: data,
    //   })
    //   .done(function(res) {
    //     console.log("Sent to the server (I think): " + res)
        
    //   });

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
      <h2>We sell things</h2>
      <br></br>
        <Table responsive>
            <thead>
                <tr>
                    <th></th>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>Percent Change (1hr)</th>
                </tr>
            </thead>
        {currencyInfo}
        </Table>
        </div>
    )

}


}

ReactDOM.render(<App />, document.getElementById('app'));
