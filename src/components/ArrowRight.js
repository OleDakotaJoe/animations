import React from 'react';




const ArrowRight = ({incrementIndex}) => {
    return(
        <div onClick={() => incrementIndex()}>
            <button className="next-button">Next</button>
        </div>
    )
};




export default ArrowRight;