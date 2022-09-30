// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  constructor(props) {
    super(props)

    const {denominationsList} = props
    this.state = {
      amount: 2000,
      denominationsList1: denominationsList,
    }
  }

  changeAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList1, amount} = this.state

    return (
      <div className="container">
        <div className="bg-container">
          <div className="profile-container">
            <p className="symbol">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>

          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{amount}</p>
              <span className="text">In Rupees</span>
            </div>
          </div>

          <div className="withdraw-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          </div>

          <ul className="list-container">
            {denominationsList1.map((eachItem, index) => (
              <li key={index}>
                <DenominationItem
                  itemDetails={eachItem}
                  changeAmount={this.changeAmount}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
