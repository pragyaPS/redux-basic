import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Title = styled.div`
  background: ${ props => props.background ? props.background : 'white' };
  border-radius: 3px;
  border: none;
  color: white;
`;

const AccordionHeader = ({ handleTitleClick, background, title }) => (<Title onClick={ handleTitleClick } 
                                                                            background= { background } > { title } </Title>);

AccordionHeader.propTypes = {
    background: PropTypes.string,
    title: PropTypes.node,
    icon: PropTypes.string
}

export default AccordionHeader;
