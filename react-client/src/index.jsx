import React from 'react';
import ReactDOM from 'react-dom';
import CryptoList from './components/CryptoList.jsx'
import Watchlist from './components/Watch.jsx'
import "./App.css";
import {
  BrowserRouter as Router,
  HashRouter,
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
        <div className="container">
            <ul className="nav">
            <BrowserRouter basename="/"/>
            <li><Link to="/watchlist">Watchlist</Link></li>
            <li><Link to="/">Home</Link></li>
            </ul>
            <hr/>
        <Route path="/" exact={true} component={CryptoList} />
        <Route path="/watchlist" component={Watchlist} />
</div>
        </div>
      </Router>
    );
  }
}
export default App;
ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
