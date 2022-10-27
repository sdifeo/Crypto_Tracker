import RefreshCardComponent from "./RefreshCardComponent"
import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import RemoveCardComponent from "./RemoveCardComponent"

const Cards = ({ cardName, id, removeCard, percent_change_24h, index }) => {
    const [price, setPrice] = useState(0)
    const [change, setChange] = useState(0)

    useEffect(() => {
        const getPrice = async () => {
            var gotUpdatedValues = await getSelectedCoinPrice(id)
            var gotPrice = gotUpdatedValues[0]
            var gotChange = gotUpdatedValues[1]
            setPrice(gotPrice)
            setChange(gotChange)
        }

        getPrice();

    }, [])

    const test = (index) =>{
        removeCard(index)
        console.log(index)
    }

    const onClickHandler = async () => {
        var gotUpdatedValues = await getSelectedCoinPrice(id)
        var gotPrice = gotUpdatedValues[0]
        var gotChange = gotUpdatedValues[1]
        setPrice(gotPrice)
        setChange(gotChange)
    }

    const getSelectedCoinPrice = async (selectedId) => {
        var resp = await fetch("/getCoin/" + selectedId)
        var json = await resp.json()
        console.log(json)
        var price = await json.data[selectedId].quote["USD"].price;
        var percent_change_24h = await json.data[selectedId].quote["USD"].percent_change_24h

        return [price, percent_change_24h];
    }

    return (
        <div className="crypto-card__container">
            <div className="crypto-card__contents">

                <div className="btn-containers">
                    <div className="refresh-button">
                        <RefreshCardComponent onClickHandler={onClickHandler}></RefreshCardComponent>
                    </div>
                    <div className="remove-btn">
                        <RemoveCardComponent onClick={() => test(index)}></RemoveCardComponent>
                    </div>
                </div>

                <div className="crypto-card__title">
                    <span>{cardName}</span>
                </div>

                <div className="crypto-card__price">
                    ${price.toFixed(2)}
                </div>

                {percent_change_24h > 0 ?
                    <div className="crypto-card__change-positive crypto-card__change">
                        {change.toFixed(2)}%
                    </div>
                    :
                    <div className="crypto-card__change-negative crypto-card__change">
                        {change.toFixed(2)}%
                    </div>
                }

            </div>
        </div>
    )
}

export default Cards
