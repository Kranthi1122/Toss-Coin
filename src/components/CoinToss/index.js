// Write your code here

import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, win: 'heads'}

  tossClicked = () => {
    const tossResult = Math.floor(Math.random() * 2)

    return tossResult === 0
      ? this.setState(prevState => ({heads: prevState.heads + 1, win: 'heads'}))
      : this.setState(prevState => ({tails: prevState.tails + 1, win: 'tails'}))
  }

  render() {
    const {heads, tails, win} = this.state
    const number = heads + tails

    return (
      <div className="main">
        <div className="small">
          <h1>Coin Toss Game</h1>
          <p className="small-heading">Heads (or) Tails</p>
          {win === 'heads' ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}
          <br />
          <button onClick={this.tossClicked}>Toss Coin</button>
          <div className="last-container">
            <p>Total:{number}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
