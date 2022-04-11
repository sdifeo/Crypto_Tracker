import RefreshCardComponent from "./RefreshCardComponent"
import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import RemoveCardComponent from "./RemoveCardComponent"

const Cards = ({ cardName, cardPrice, id, removeCard}) => {
    const [price, setPrice] = useState(0)

    useEffect(() => {
        const getPrice = async () => {
            var gotPrice = await getSelectedCoinPrice(id);
            setPrice(gotPrice)
        }

        getPrice();

    }, [])


    const onClickHandler = async () => {
        var gotPrice = await getSelectedCoinPrice(id)
        setPrice(gotPrice)
    }

    const getSelectedCoinPrice = async (selectedId) => {
        var resp = await fetch("/getCoin/" + selectedId);
        var json = await resp.json();
        var price = json.data[selectedId].quote["USD"].price;
        Math.round(price)

        return price;
    }

    return (
        <div>

            <Card className="crypto-card" style={{ width: '18rem' }}>

                <div className="btn-containers">
                    <div className="refresh-button">
                        <RefreshCardComponent onClickHandler={onClickHandler}></RefreshCardComponent>
                    </div>
                    <div className="remove-btn">
                        {/* <RemoveCardComponent removeCard={removeCard}></RemoveCardComponent> */}
                    </div>
                </div>

                <Card.Body>

                    <Card.Title>{cardName}</Card.Title>

                    <Card.Text>
                        {price.toFixed(2)}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Cards
