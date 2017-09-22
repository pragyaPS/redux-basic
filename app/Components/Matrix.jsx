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
      this.positionValues = ['top','right','bottom','left'];
      this.matrix= this.generateTable(16,16);
      let currentPosition = this.matrix[0];
      this.state = {currentX: currentPosition.x, currentY: currentPosition.y, position: this.positionValues[0] }

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
render() {
    
   return  (<div>
       <table >
           {
               [...Array(16)].map((e0,i)=> ( 
                    <tr key={i}>
                        {
                            [...Array(16)].map((e1, j ) => ( 
                                <td key={j+"||"+j}>{i}/{j}</td>
                            ))
                        }
                    </tr>
                ))
           }
       </table>

       <Button onClick = {this.handleTurnLeft}>Turn Left</Button>
       <Button onClick = {this.handleTurnRight}>Turn right</Button>
       <Button onClick = {this.handleMoveForward}>Move Forward</Button>
   </div>)
}
handleTurnLeft = () => {
  
}

handleTurnRight = () => {
    
}

handleMoveForward = () => {
    
}

}

export default Matrix;
