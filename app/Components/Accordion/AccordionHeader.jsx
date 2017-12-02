import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Title = styled.div`
  background: ${ props => props.background ? props.background : 'white' };
  border-radius: 3px;
  border: none;
  color: white;
`;
// const handleFn = () =>{
//     console.log("sdthis.handleTitleClick")
// }
const AccordionHeader = (props) => (<Title onClick={ props.handleTitleClick } background= { props.background } >jjh</Title>);

AccordionHeader.propTypes = {
    background: PropTypes.string,
    title: PropTypes.node,
    icon: PropTypes.string
}

export default AccordionHeader;