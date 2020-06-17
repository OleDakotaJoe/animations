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
            angle: 0,
            cellCount: 9,
            cellSize: 210


        }
    }

decrementIndex= () => {
    this.setState({selectedindex: this.state.selectedindex -1}, () => this.rotateCarousel());
}

incrementIndex= () => {
    this.setState({selectedindex: this.state.selectedindex + 1}, ()=> this.rotateCarousel());
}

rotateCarousel= ()=> {
    this.setState({angle: this.state.theta * this.state.selectedindex * -1});
  }

componentDidMount() {
    this.setState({theta : 360 / this.state.cellCount});
    this.setState({radius : Math.round( ( this.state.cellSize / 2) / Math.tan( Math.PI / this.state.cellCount ) )});
}


    render() {



        
        return(
            <div>
                <div className="scene">
                    <div className="carousel" style={{'transform' : `translateZ(${-this.state.radius}px)rotateY(${this.state.angle}deg)`}}>
                    <CellList cellCount={this.state.cellCount} theta={this.state.theta} radius={this.state.radius} />
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