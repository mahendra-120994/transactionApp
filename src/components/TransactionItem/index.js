import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props

  const {title, amount, type, id} = transactionDetails

  const onDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="history_list_item">
      <p className="list_item">{title}</p>
      <p className="list_item">{amount}</p>
      <p className="list_item">{type}</p>
      <button
        type="button"
        className="dlt_btn"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="dlt_img"
        />
      </button>
    </li>
  )
}
export default TransactionItem
