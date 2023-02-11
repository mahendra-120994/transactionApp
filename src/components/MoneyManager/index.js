import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    inputTitle: '',
    inputAmt: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  addTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  addAmt = event => {
    this.setState({inputAmt: event.target.value})
  }

  addType = event => {
    this.setState({optionId: event.target.value})
  }

  addTransaction = () => {
    const {inputTitle, inputAmt, optionId} = this.state

    if (inputTitle !== '' && inputAmt !== undefined) {
      const optionType = transactionTypeOptions.find(
        eachItem => eachItem.optionId === optionId,
      )
      const {displayText} = optionType
      const newTransaction = {
        id: uuidv4(),
        title: inputTitle,
        amount: parseInt(inputAmt),
        type: displayText,
      }

      this.setState(prev => ({
        transactionsList: [...prev.transactionsList, newTransaction],
        inputTitle: '',
        inputAmt: '',
        optionId: transactionTypeOptions[0].optionId,
      }))
    }
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const updatedList = transactionsList.filter(eachItem => eachItem.id !== id)

    this.setState({transactionsList: updatedList})
  }

  render() {
    const {transactionsList, inputTitle, inputAmt, optionId} = this.state
    return (
      <div className="bg_container">
        <div className="container">
          <div className="money_manger_container">
            <div className="account_holder">
              <h1 className="heading">Hi, Richard</h1>
              <p className="welcome">
                Welcome back to your{' '}
                <span className="app_name">Money Manager</span>
              </p>
            </div>

            <MoneyDetails transactionsList={transactionsList} />
            <div className="transaction_history_container">
              <div className="add_transaction_container">
                <h1 className="tran_heading">Add Transaction</h1>
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  id="title"
                  className="input_ele"
                  placeholder="TITLE"
                  onChange={this.addTitle}
                  value={inputTitle}
                />
                <label htmlFor="amount" className="label">
                  AMOUNT
                </label>
                <input
                  type="text"
                  id="amount"
                  className="input_ele"
                  placeholder="AMOUNT"
                  onChange={this.addAmt}
                  value={inputAmt}
                />
                <label htmlFor="type" className="label">
                  TYPE
                </label>
                <select
                  className="input_ele"
                  id="type"
                  onChange={this.addType}
                  value={optionId}
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="add_btn"
                  onClick={this.addTransaction}
                >
                  Add
                </button>
              </div>
              <div className="history_container">
                <h1 className="history_heading">History</h1>
                <ul className="history_list">
                  <li className="list_title">
                    <p className="A">Title</p>
                    <p className="A">Amount</p>
                    <p className="A">Type</p>
                    <div className="empty" />
                  </li>
                  {transactionsList.map(transactionDetails => (
                    <TransactionItem
                      key={transactionDetails.id}
                      transactionDetails={transactionDetails}
                      deleteTransaction={this.deleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
