import React from 'react';
import PropTypes from 'prop-types';

import Button from './commonComponent/Button.jsx';


class Matrix extends React.Component {
    static propTypes = {
        data: PropTypes.array,
    
    };
    static defaultProps = {
    
  };
  constructor() {
      super();
      this.positionValues = ['TOP','RIGHT','BOTTOM','LEFT'];
      this.matrix= this.generateTable(16,16);
      let currentPosition = this.matrix[0];
      this.state = {
          currentX: currentPosition.x,
            currentY: currentPosition.y,
          currentPosition: this.positionValues[0],
          isDeadLock: false
       }

  }

render() {
    
   return  (<div>
       <table >
           {
               [...Array(16)].map((e0,i)=> ( 
                    <tr key={i}>
                        {
                            [...Array(16)].map((e1, j ) => ( 
                                <td key={j+"||"+j}> 
                                    {i=== this.state.currentX && j === this.state.currentY ? "C" : "" }
                                     </td>
                            ))
                        }
                    </tr>
                ))
           }
       </table>
       {this.state.isDeadLock ? <div>DeadLock</div> : null}
       <div>currentX: {this.state.currentX}, currentY: {this.state.currentY}, currentPosition: {this.state.currentPosition }, isDeadLock:{this.state.isDeadLock.toString()}</div>

       <Button onClick = {this.handleTurnLeft}>Turn Left</Button>
       <Button onClick = {this.handleTurnRight}>Turn right</Button>
       <Button onClick = {this.handleMoveForward}>Move Forward</Button>
   </div>)
}
generateTable = (m,n) => {
      let matrix= [];
      for( let i = 0 ; i<=m ; i++){
          for(let j=0; j<=n; j++) {
           matrix.push( { x:i,y:j});
          }
      }
      return matrix;
  }

getNextElement= (arr, currentIndex) => {
let nextIndex = ++currentIndex % arr.length;
return arr[nextIndex];
}
getPreviousElement = (arr, currentIndex) => {
    let PrevIndex = currentIndex ==0? arr.length-1 : currentIndex-1;
    return arr[PrevIndex];

}
handleTurnLeft = () => {
    this.setState({currentPosition: this.getPreviousElement(this.positionValues, this.positionValues.indexOf(this.state.currentPosition))});
  }

handleTurnRight = () => {
    this.setState({currentPosition: this.getNextElement(this.positionValues, this.positionValues.indexOf(this.state.currentPosition))})
}
checkDeadLock (x,y){
    let deadLockFlag = (x<0||x>15) || (y<0 || y>15);
    deadLockFlag ? this.setState({isDeadLock: true}) : null;
    return deadLockFlag;

}

handleMoveForward = () => {
    if(!this.state.isDeadLock) {
        switch(this.state.currentPosition){
            case "LEFT": !this.checkDeadLock(this.state.currentX-1,this.state.currentY) ? this.setState({currentX: this.state.currentX-1}) : null;
                        break;
            case "RIGHT": !this.checkDeadLock(this.state.currentX+1,this.state.currentY) ? this.setState({currentX: this.state.currentX+1}) : null;
                        break;
            case "TOP": !this.checkDeadLock(this.state.currentX,this.state.currentY-1) ? this.setState({currentY: this.state.currentY -1}) : null;
                        break;
            case "BOTTOM": !this.checkDeadLock(this.state.currentX,this.state.currentY+1) ? this.setState({currentY: this.state.currentY + 1}) : null;
                        break;
            

        }
    }
    
}

}

export default Matrix;
