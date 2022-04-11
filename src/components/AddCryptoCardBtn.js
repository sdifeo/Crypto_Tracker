import React from 'react'
import Button from "react-bootstrap/Button"
import "../css/CSS_AddCryptoCard.css"

const AddCryptoCard = ({ modalpress }) => {
    return (
        <div className="add-crypto-card-space text-center">
            {/* <Button variant="outline-dark" style={{ width: "100%", backgroundColor: "Transparent" }} 
            onClick={modalpress} type="button" value="+" 
            className="add-crypto-card-btn text-white">Add Coin</Button> */}
            <button variant="outline-dark" 
            onClick={modalpress} type="button" value="+" 
            className="add-crypto-card-btn text-white">Add Coin</button>
        </div>
    )
}

export default AddCryptoCard
