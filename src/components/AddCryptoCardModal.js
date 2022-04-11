import "../css/CSS_AddCryptoCardModal.css"
import { DropDownCryptoSearch } from './DropDownCryptoSearch'

const AddCryptoCardModal = ({ showingModal, modalpress, addCard, coinNames, }) => {

    return (
        <>
            {showingModal ?

                <div className="crypto-card-modal">

                    <div className="crypto-modal-container">

                        <h4 className="crypto-modal-header modal-title">Please Select a Coin to follow</h4>

                        <DropDownCryptoSearch coinNames={coinNames} addCard={addCard} modalpress={modalpress} ></DropDownCryptoSearch>

                    </div>

                </div>

                : null}
        </>
    )
}

export default AddCryptoCardModal
