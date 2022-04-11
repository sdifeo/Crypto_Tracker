import React from 'react'
import Cards from './Cards'
import "../css/CSS_CryptoCard.css"

const CryptoCards = ({cards, getSelectedCoinPrice, removeCard}) => {

    return (
        <div className="crypto-card-grid">

            {cards.map((card) =>
            <Cards key={card.id}
                    cardName={card.coinName}
                    cardPrice = {card.price}
                    id={card.id}
                    getSelectedCoinPrice={getSelectedCoinPrice}
                    // removeCard={removeCard}
                     />
            )}
        </div>
    )
}

export default CryptoCards
