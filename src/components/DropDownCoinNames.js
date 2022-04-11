import React from 'react'
import "../css/CSS_DropDownCoinNames.css"

export const DropDownCoinNames = ({coin, addCard}) => {

    return (
        <div className="list-group">
            <li className='list-group-item' onClick={() => addCard(coin.name, coin.id)} id={coin.id}>{coin.name}</li>
        </div>
    )
}
