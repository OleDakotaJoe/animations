import React from 'react';




const CarouselCell =({index})=>{
    return(
    <div className="carousel__cell" id={index}>{`${index}`}</div>
    )
}


export default CarouselCell;