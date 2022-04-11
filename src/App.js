import React, { useState, useEffect } from "react";
import CryptoCards from "./components/CryptoCards";
import AddCryptoCardModal from "./components/AddCryptoCardModal";
import "./css/CSS_Main.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import AddCryptoCardBtn from "./components/AddCryptoCardBtn"
import ClearAllBtn from "./components/ClearAllBtn";
import "./css/CSS_AppContainer.css"

function App() {

  const [cards, setCards] = useState([

  ])

  const [showingModal, showModal] = useState(false)
  const [showingSideBar, showSideBar] = useState(true)
  const [showingCryptoCoins, showCryptoCoins] = useState(false)
  const [coinNames, setCoinNames] = useState()
  const [updatedPrice, setUpdatedPrice] = useState()

  useEffect(() => {
    populateCoinNameList()

  }, [])

  const toggleSideBar = () => {
    showSideBar(!showingSideBar)
  }

  //calls
  const populateCoinNameList = async () => {
    await fetch("/getCoinsFromFile")
      .then(response => response.json())
      .then(json => (setCoinNames(json)))

  }

  const clearAllCards = () => {
    setCards([])

  }

  const removeCard = (e) => {
    console.log(e)
    console.log(cards)

    // cards.splice(0, 1)
  }

  const getSelectedCoinPrice = async (selectedId) => {
    var resp = await fetch("/getCoin/" + selectedId);
    var json = await resp.json();
    var price = json.data[selectedId].quote["USD"].price;
    setUpdatedPrice(price)

    return price;
  }

  const addCryptoCard = async (coin, coinId) => {
    const id = coinId

    var foundId = (cards.map((x) => {
      return x.id
    }).find(element => element === coinId))

    if (foundId === undefined) {
      var price = await getSelectedCoinPrice(coinId)
      price = price.toFixed(2)
      const coinName = coin
      const newCard = { price, coinName, id }

      setCards(cards => [...cards, newCard])
    }
    else {

    }
  }

  const focusingCryptoSearchTextBox = () => {
    showCryptoCoins(!showingCryptoCoins)
  }

  const buttonModalPress = () => {
    showModal(!showingModal)
  }

  return (
    <div>

      <div className="header">
        <Header></Header>

        <div className="topnavbar">
            <ClearAllBtn clearAllCards={clearAllCards}></ClearAllBtn>

            <div className="addBtn">
              <AddCryptoCardBtn modalpress={buttonModalPress}></AddCryptoCardBtn>
            </div>
          </div>

      </div>
      <div className="app-container">

        <div className="container-fluid">

          <div className="crypto-flex">
            {cards.length === 0 ? <h2 className="text-center">Please select a coin to follow</h2> : null}

            <div className="crypto-card-container">
              <CryptoCards removeCard={removeCard} coinNames={coinNames} getSelectedCoinPrice={getSelectedCoinPrice} cards={cards}></CryptoCards>
            </div>

          </div>

          <AddCryptoCardModal

            modalpress={buttonModalPress}
            showingModal={showingModal}
            showModal={showModal}
            showcryptodropdown={focusingCryptoSearchTextBox}
            addCard={addCryptoCard}
            cards={cards}
            coinNames={coinNames}

          ></AddCryptoCardModal>

        </div>
      </div>
    </div>
  );
}

export default App;
