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

  const removeCard = (index) => {
    console.log(index)
    console.log(cards)

    setCards([...cards.slice(0, index), ...cards.slice(index+1, cards.length)])
  }

  const getSelectedCoinPrice = async (selectedId) => {
    var resp = await fetch("/getCoin/" + selectedId)
    var json = await resp.json()
    console.log(json)
    var price = await json.data[selectedId].quote["USD"].price;
    var percent_change_24h = await json.data[selectedId].quote["USD"].percent_change_24h
    await setUpdatedPrice(price)

    return [price, percent_change_24h];
  }

  const addCryptoCard = async (coin, coinId) => {
    const id = coinId

    var foundId = (cards.map((x) => {
      return x.id
    }).find(element => element === coinId))

    if (foundId === undefined) {
      var result = await getSelectedCoinPrice(coinId)
      var price = result[0].toFixed(2)
      var percent_change_24h = result[1]
      const coinName = coin
      const newCard = { price, coinName, id, percent_change_24h }

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

          <div className="addBtn">
            <AddCryptoCardBtn modalpress={buttonModalPress}></AddCryptoCardBtn>
          </div>
          <ClearAllBtn clearAllCards={clearAllCards}></ClearAllBtn>

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
