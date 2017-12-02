import React from 'react';
import PropTypes from 'prop-types';
import AccordionContentWrapper from '../styled/AccordionContent.styled';

const AccordionContent = ( {isOpen, content} ) => (
  <AccordionContentWrapper
    isOpen={ isOpen }
  >
    { content }
  </AccordionContentWrapper>
);

AccordionContent.propTypes = {
  isOpen: PropTypes.bool,
  content: PropTypes.node
}

export default AccordionContent;
