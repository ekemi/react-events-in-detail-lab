// Code CoordinatesButton Component Here

import React, {Component}from 'react';

export default class CoordinatesButton extends Component{
     handleClick = (event)=> {

        
         this.props.onReceiveCoordinates([event.clientX, event.clientY])
         console.log(event)
     }
    render() {
        return (
            <div>
              <button onClick={this.handleClick}>Click</button>  
            </div>
        )
        }    
}

