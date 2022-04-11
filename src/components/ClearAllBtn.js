import React from 'react'
import "../css/CSS_ClearAllBtn.css"

const ClearAllBtn = ({clearAllCards}) => {
  return (
    <div className='clearBtn-container'>
        <button onClick={clearAllCards} className="clearAllBtn">Clear All</button>
    </div>
  )
}

export default ClearAllBtn