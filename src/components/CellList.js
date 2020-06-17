import React from 'react';
import CarouselCell from './CarouselCell';



const CellList = ({cellCount, theta, radius}) => {

    let list = [];
    for (let i = 0; i < cellCount; i++) {
      let cellAngle = theta * (i)
      list.push(<CarouselCell index={i + 1} key={i+1} id={i+1} cellAngle={cellAngle} radius={radius} />)
    } 
        
  return(
    
  <div>{list}</div>
      
  )  
} 






export { CellList };