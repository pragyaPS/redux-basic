import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.div`
  display: ${ props => props.isOpen ? 'block' : 'none' };
 `;

const AccordionContent = (props) => (<Content isOpen={ props.isOpen }> { props.content } </Content>);

AccordionContent.propTypes = {
    isOpen: PropTypes.bool,
    content: PropTypes.node
   
}

export default AccordionContent;