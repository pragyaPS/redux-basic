import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.div`
  display: ${ props => props.isOpen ? 'block' : 'none' };
 `;

const AccordionContent = ( {isOpen, content} ) => (<Content isOpen={ isOpen }> { content } </Content>);

AccordionContent.propTypes = {
    isOpen: PropTypes.bool,
    content: PropTypes.node
   }

export default AccordionContent;