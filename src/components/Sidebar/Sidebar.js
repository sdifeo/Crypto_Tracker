import React from 'react'
import AddCryptoCardBtn from "../AddCryptoCardBtn"
import Header from "../Header";
import "../../css/CSS_Sidebar.css"
import ClearAllBtn from '../ClearAllBtn';
import { AiFillCaretLeft } from "react-icons/ai";

const Sidebar = ({ modalpress, clearAllCards, toggleSideBar }) => {
    return (
        <div>
            <div className='text-start' style={{paddingLeft: "15px"}}>
                <AiFillCaretLeft onClick={toggleSideBar} color='black' size={25}></AiFillCaretLeft>
            </div>
            <AddCryptoCardBtn modalpress={modalpress}></AddCryptoCardBtn>
            <ClearAllBtn clearAllCards={clearAllCards} ></ClearAllBtn>

        </div>
    )
}

export default Sidebar