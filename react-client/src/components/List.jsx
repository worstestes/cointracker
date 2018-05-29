// import ListItem from './ListItem.jsx';

// const List = (props) => (
//   <div>
//     <h4> List Component </h4>
//     There are { props.items.length } items.
//     { props.items.map(item => <ListItem item={item}/>)}
//   </div>
// )

// export default List;



import React from "react";
var NumberFormat = require('react-number-format');
import { ButtonToolbar, Button} from 'react-bootstrap';
// import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonShare } from 'react-awesome-button';


const Currency = (props) => {
  return (
  <tbody id={props.cryptos.symbol}>
    <tr>
        <td> 
          <ButtonToolbar>
          <Button bsSize="xsmall" id={props.cryptos.rank} onClick={props.onClick}>Add</Button>
          </ButtonToolbar>
        </td>
        <td>{props.cryptos.rank}</td>
        <td>{props.cryptos.name}</td>
        <td><NumberFormat value={props.cryptos.price_usd} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></td>
        <td><NumberFormat value={props.cryptos.market_cap_usd} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></td>
        <td className={props.cryptos.percent_change_1h < 0 ? 'price-neg' : 'price-plus'}>{props.cryptos.percent_change_1h > 0 ? (`+${props.cryptos.percent_change_1h}`) : props.cryptos.percent_change_1h}%</td>
    </tr>
  </tbody>
)
}


export default Currency;



/*
<div className='logo'>
</div>
<div className="content">
  <h5 className="name">{props.cryptos.name} ({props.cryptos.symbol}) </h5>
  <h5 className="market-cap">Market Cap | {props.cryptos.market_cap_usd}</h5>
  <h5 className="price"><NumberFormat value={props.cryptos.price_usd} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></h5>
  <h5 className={props.cryptos.percent_change_1h < 0 ? 'price-neg' : 'price-plus'}>{props.cryptos.percent_change_1h}%</h5>
</div> */