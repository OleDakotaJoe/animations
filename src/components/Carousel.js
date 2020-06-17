import React from 'react';
import './Carousel.css';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import {CellList} from './CellList';



class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedindex: 0,
            radius: Number,
            theta: Number,
            angle: Number,
            cellCount: 9,
            radius: Number


        }
    }

decrementIndex= () => {
    this.setState({selectedindex: this.state.selectedindex -1});
   // this.changeCarousel();
}

incrementIndex= () => {
    this.setState({selectedindex: this.state.selectedindex + 1});
    //this.changeCarousel();
}

rotateCarousel= ()=> {
    this.setState({angle: this.state.theta * this.state.selectedindex * -1});
  }

changeCarousel = () => {
    this.setState({theta : 360 / this.state.cellCount})
    let cellSize = 210;
    this.setState({radius : Math.round( ( cellSize / 2) / Math.tan( Math.PI / this.state.cellCount ) )});

    // for ( let i=0; i < this.state.cellCount-1 /*made a change ref orig doc*/; i++ ) {
    //   let cell = cells[i];
    //   if ( i < this.state.cellCount-1/*here too*/ ) {
    //     // visible cell
    //     cell.style.opacity = 1;
    //     let cellAngle = this.state.theta * i;
    //     cell.style.transform = `rotateY(${cellAngle}deg) translateZ(${this.state.radius} + 'px)`;
    //   } else {
    //     // hidden cell
    //     cell.style.opacity = 0;
    //     cell.style.transform = 'none';
    //   }
    // }
  
    this.rotateCarousel();
  }





componentDidMount() {
    console.log()
}



    render() {
        return(
            <div>
                <div className="scene">
                    <div className="carousel" style={{'transform' : `translateZ(${-this.state.radius}px)rotateY(${this.state.angle}deg)`}}>
                    <CellList cellCount={this.state.cellCount} />
                    </div>
                </div>

                <div className="carousel-options">
                        <ArrowLeft decrementIndex={this.decrementIndex}/>
                        <ArrowRight incrementIndex={this.incrementIndex} />
                </div>
            </div>
        )
    }
}



export default Carousel;