// Write your code here
import './index.css'

const DenominationItem = props => {
  const {itemDetails, changeAmount} = props
  const {value} = itemDetails

  const onButton = () => {
    changeAmount(value)
  }

  return (
    <button className="amount-button" type="button" onClick={onButton}>
      {value}
    </button>
  )
}

export default DenominationItem
