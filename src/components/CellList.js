import React from 'react';
import CarouselCell from './CarouselCell';



const CellList = ({cellCount}) => {

    let list = [];
    for (let i = 0; i < cellCount; i++) {
      list.push(<CarouselCell index={i + 1} key={i+1} id={i+1}/>)
    } 







    console.log(list)


        
  return(
    
  <div>{list}</div>
      
  )  
} 






export { CellList };