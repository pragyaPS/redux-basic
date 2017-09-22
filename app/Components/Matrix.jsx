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
      this.state = {matrix: this.generateTable(16,16)};
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
                                <td key={j}>{i}{j}</td>
                            ))
                        }
                    </tr>
                ))
           }
       </table>

       <Button>Turn Left</Button>
       <Button>Turn right</Button>
       <Button>Move Forward</Button>
   </div>)
}
}

export default Matrix;
