import React from 'react';
import PropTypes from 'prop-types';
import AccordionHeaderWrapper from '../styled/AccordionHeader.styled';

const AccordionHeader = ({ handleTitleClick, background, title }) => (
  <AccordionHeaderWrapper
    onClick    = { handleTitleClick }
    background = { background }
  >
    {title}
  </AccordionHeaderWrapper>
);

AccordionHeader.propTypes = {
    background: PropTypes.string,
    title: PropTypes.node,
    icon: PropTypes.string
}

export default AccordionHeader;
