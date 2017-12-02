import React from 'react';
import PropTypes from 'prop-types';

import Button from './commonComponent/Button.jsx';


class Matrix extends React.Component {
    static propTypes = {
        rows: PropTypes.number,
        columns: PropTypes.number
    
    };
    static defaultProps = {
    rows: 16,
    columns: 16
  };
  constructor(props) {
      super(props);
      this.positionValues = ['TOP','RIGHT','BOTTOM','LEFT'];
      this.matrix= this.generateTable(this.props.rows, this.props.columns);
      let currentPosition = this.matrix[0];
      this.state = {
          currentX: currentPosition.x,
            currentY: currentPosition.y,
          currentPosition: this.positionValues[1],
          isDeadLock: false
       }
    }

render() {
    const {rows, columns } = this.props;
    const { currentX, currentY, currentPosition, isDeadLock } = this.state;
    
   return  (<div>
       {isDeadLock && <div className="error-msg">DeadLock</div>}
       <table >
           {
               [...Array(rows)].map((e0,i)=> ( 
                    <tr key={i}>
                        {
                            [...Array(columns)].map((e1, j ) => ( 
                                <td key={j+"||"+j}> 
                                    {i=== currentX && j === currentY ? (<div className= {'robote-'+currentPosition}>C</div>) : "" }
                                     </td>
                            ))
                        }
                    </tr>
                ))
           }
       </table>
       
       <div>currentX: { currentX}, currentY: { currentY}, currentPosition: {currentPosition }, isDeadLock:{isDeadLock.toString()}</div>

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
    const { isDeadLock, currentPosition } = this.state;
    !isDeadLock ? this.setState({currentPosition: this.getPreviousElement(this.positionValues, this.positionValues.indexOf(currentPosition))}): null;
  }

handleTurnRight = () => {
    const { isDeadLock, currentPosition } = this.state;
    !isDeadLock ? this.setState({currentPosition: this.getNextElement(this.positionValues, this.positionValues.indexOf(currentPosition))}) : null;
}
checkDeadLock (x,y){
    let deadLockFlag = (x<0||x>(this.props.rows-1)) || (y<0 || y>(this.props.columns-1));
    deadLockFlag ? this.setState({isDeadLock: true}) : null;
    return deadLockFlag;
}

handleMoveForward = () => {
    const { isDeadLock, currentPosition, currentX, currentY } = this.state;
    if(!this.state.isDeadLock) {
        switch(this.state.currentPosition){
            case "LEFT": !this.checkDeadLock(currentX, currentY-1) ? this.setState({currentY: currentY-1}) : null;
                        break;
            case "RIGHT": !this.checkDeadLock(currentX, currentY+1) ? this.setState({ currentY: currentY+1}) : null;
                        break;
            case "TOP": !this.checkDeadLock(currentX-1, currentY) ? this.setState({currentX: currentX -1}) : null;
                        break;
            case "BOTTOM": !this.checkDeadLock( currentX+1, currentY) ? this.setState({currentX: currentX + 1}) : null;
                        break;
            

        }
    }
    
}

}

export default Matrix;
