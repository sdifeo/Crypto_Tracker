import React from 'react'
import { MdRemoveCircleOutline } from "react-icons/md";
import { useEffect } from 'react';

const RemoveCardComponent = ({removeCard, id}) => { 

  return (
    <div>
        <MdRemoveCircleOutline id={id} onClick={removeCard} size={30}></MdRemoveCircleOutline>
    </div>
  )
}

export default RemoveCardComponent