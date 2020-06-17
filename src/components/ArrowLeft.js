import React from 'react';




const ArrowLeft = ({decrementIndex}) => {
    return(
        <div onClick={() => decrementIndex()}>
            <button className="previous-button">Previous</button>
        </div>
    )
};




export default ArrowLeft;