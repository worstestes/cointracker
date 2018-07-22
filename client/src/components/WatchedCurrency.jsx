import React from "react";
var NumberFormat = require('react-number-format');
import { ButtonToolbar, Button} from 'react-bootstrap';
// import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonShare } from 'react-awesome-button';


const WatchedCurrency = (props) => {
  return (
    <tbody id={props.final.symbol}>
    <tr>
        <td className="rank">{props.final.rank}</td>
        <td className="name">{props.final.name}</td>
        <td className="symbol">[{props.final.symbol}]</td>
        <td className="price"><NumberFormat value={props.final.price_usd} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></td>
        <td className="market"><NumberFormat value={props.final.market_cap_usd} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></td>
        <td className={props.final.percent_change_1h < 0 ? 'price-neg' : 'price-plus'}>{props.final.percent_change_1h > 0 ? (`+${props.final.percent_change_1h}`) : props.final.percent_change_1h}%</td>
    </tr>
  </tbody>
)
}


export default WatchedCurrency;

// <td><NumberFormat value={props.watched.price_usd} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></td>
// <td><NumberFormat value={props.watched.market_cap_usd} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></td>
// <td className={props.watched.percent_change_1h < 0 ? 'price-neg' : 'price-plus'}>{props.cryptos.percent_change_1h > 0 ? (`+${props.cryptos.percent_change_1h}`) : props.cryptos.percent_change_1h}%</td>