import React from "react";
var NumberFormat = require('react-number-format');
import { ButtonToolbar, Button} from 'react-bootstrap';


const Currency = (props) => {


  return (
  <tbody id={props.cryptos.symbol}>
 

    <tr>
        <td> 
          <ButtonToolbar>
          <Button bsStyle="primary" bsSize="xsmall" className="add" id={props.cryptos.rank} onClick={props.onClick}>Add</Button>
          </ButtonToolbar>
        </td>
        <td className="rank">{props.cryptos.rank}</td>
        <td className="name">{props.cryptos.name}</td>
        <td className="symbol">[{props.cryptos.symbol}]</td>
        <td className="price"><NumberFormat value={props.cryptos.price_usd} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></td>
        <td className="market"><NumberFormat value={props.cryptos.market_cap_usd} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></td>
        <td className={props.cryptos.percent_change_1h < 0 ? 'price-neg' : 'price-plus'}>{props.cryptos.percent_change_1h > 0 ? (`+${props.cryptos.percent_change_1h}`) : props.cryptos.percent_change_1h}%</td>
    </tr>
  </tbody>
)
}


export default Currency;