import {Component} from 'react'

import './index.css'

class MoneyDetails extends Component {
  getBalanceDetails = () => {
    const {transactionsList} = this.props
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(transDetails => {
      if (transDetails.type === 'Income') {
        incomeAmount += transDetails.amount
      } else {
        expensesAmount += transDetails.amount
      }

      balanceAmount = incomeAmount - expensesAmount
    })

    return {balanceAmount, incomeAmount, expensesAmount}
  }

  render() {
    const {
      balanceAmount,
      incomeAmount,
      expensesAmount,
    } = this.getBalanceDetails()
    return (
      <div className="money_details_container">
        <div className="money_details_box green">
          <div className="icon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
              className="icon_img"
            />
          </div>
          <div className="balance_details ">
            <p className="balance_show">Your Balance</p>
            <p className="amount_show" data-testid="balanceAmount">
              Rs {balanceAmount}
            </p>
          </div>
        </div>
        <div className="money_details_box aqua">
          <div className="icon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
              className="icon_img"
            />
          </div>
          <div className="balance_details ">
            <p className="balance_show">Your Income</p>
            <p className="amount_show" data-testid="incomeAmount">
              Rs {incomeAmount}
            </p>
          </div>
        </div>
        <div className="money_details_box purple">
          <div className="icon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alt="expenses"
              className="icon_img"
            />
          </div>
          <div className="balance_details">
            <p className="balance_show">Your Expenses</p>
            <p className="amount_show" data-testid="expensesAmount">
              Rs {expensesAmount}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyDetails
