import React from 'react'
import { BiRefresh } from "react-icons/bi";

const RefreshCardComponent = ({onClickHandler}) => {
    return (
        <div>
            <BiRefresh onClick={onClickHandler} size={35}></BiRefresh>
        </div>
    )
}

export default RefreshCardComponent
