import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect } from 'react';

const RemoveCardComponent = ({removeCard, id, index}) => { 

  return (
    <div>
        <AiOutlineDelete index={index} id={id} onClick={(e) => removeCard(e)} size={30}></AiOutlineDelete>
    </div>
  )
}

export default RemoveCardComponent