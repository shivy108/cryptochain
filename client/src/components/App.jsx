import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

class App extends Component {
  state = { walletInfo: {} };

  componentDidMount() {
    fetch(`${document.location.origin}/api/wallet-info`)
      .then((response) => response.json())
      .then((json) => this.setState({ walletInfo: json }));
  }

  render() {
    const { address, balance } = this.state.walletInfo;

    return (
      <div className="App">
        <div id="background"></div>
        <div id="midground"></div>
        <div id="foreground"></div>
        <img className="logo" src={logo}></img>
        <br />
        <div id="title" className="front">
          R2-D2 Crypto
        </div>
        <br />
        <div>
          <Link to="/blocks">Blocks</Link>
        </div>
        <div>
          <Link to="/conduct-transaction">Conduct a Transaction</Link>
        </div>
        <div>
          <Link to="/transaction-pool">Transaction Pool</Link>
        </div>
        <br />
        <div className="WalletInfo">
          <div id="title">Address: {address}</div>
          <div id="title">R2-D2 Balance: {balance}</div>
        </div>
      </div>
    );
  }
}

export default App;
