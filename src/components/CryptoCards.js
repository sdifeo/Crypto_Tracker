import React from 'react'
import Cards from './Cards'
import "../css/CSS_CryptoCard.css"

const CryptoCards = ({cards, getSelectedCoinPrice, removeCard}) => {

    return (
        <div className="crypto-card-grid">

            {cards.map((card, index) =>
            <Cards key={index}
                    index={index}
                    cardName={card.coinName}
                    cardPrice = {card.price}
                    id={card.id}
                    getSelectedCoinPrice={getSelectedCoinPrice}
                    percent_change_24h = {card.percent_change_24h}
                    removeCard = {removeCard}
                     />
            )}
        </div>
    )
}

export default CryptoCards
