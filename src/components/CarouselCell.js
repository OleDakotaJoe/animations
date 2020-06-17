import React from 'react';




const CarouselCell =({index,cellAngle,radius})=>{
    return(
    <div className="carousel__cell" id={index} style={{'transform' : `rotateY(${cellAngle}deg) translateZ(${radius}px)`}}>{`${index}`} </div>
    )
}


export default CarouselCell;