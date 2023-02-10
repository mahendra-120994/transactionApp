import './index.css'

const MoneyDetails = () => {
  const a = 0
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
          <p className="amount_show">Rs. 40000</p>
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
          <p className="amount_show">Rs. 50000</p>
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
          <p className="amount_show">Rs. 10000</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
