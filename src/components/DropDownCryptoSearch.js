import React from 'react'
import { useState } from 'react'
import Button from "react-bootstrap/Button"
import "../css/CSS_DropDownCryptoSearch.css"
import { DropDownCoinNames } from './DropDownCoinNames'

export const DropDownCryptoSearch = ({coinNames, addCard, modalpress}) => {
    const [cryptoName, setCryptoName] = useState("")  
    
    return (
        <div>
            
            <div className="dropdown-modal-container">

                <form id="form-submit">
                
                    <input id="search-bar"

                        type="text" placeholder="Ex: Bitcoin"
                        onChange = {(e) => setCryptoName(e.target.value)}
                        >
                        
                    </input>

                    <div className="modal-submit-cancel-btns">
                        <Button onClick={modalpress} variant="primary" id="cancel-btn" type="button" value="Done" className="close-crypto-modal">Done</Button>
                    </div>

                </form>

                <ol id="dropDownCoinList">

                {coinNames != null ? coinNames.filter((coin) => {
                    if (cryptoName === ""){
                        return null
                    }
                    else if (coin.name.toLowerCase().startsWith((cryptoName.toLocaleLowerCase().trim()))){
                        return coin
                    }
                    return null
                }).slice(0, 10).map((coin) => 
                {
                    return <DropDownCoinNames coin = {coin} addCard = {addCard} key={coin.id}> </DropDownCoinNames>
                }) : null}
                
                </ol>

            </div>
        </div>
    )
}
export default DropDownCryptoSearch