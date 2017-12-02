import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AccordionWrapper from '../styled/Accordion.styled';
import AccordionHeader from './AccordionHeader';
import AccordionContent from './AccordionContent';

class Accordion extends Component {
    static propTypes = {
        title: PropTypes.node,
        content: PropTypes.node,
        isDefaultOpen: PropTypes.bool,
        ActiveHeaderColor: PropTypes.string
    }
    static defaultProps = {
    isDefaultOpen: false
  };
  constructor(props) {
      super(props);
      this.state= { isOpen: props.isDefaultOpen }
    }

  handleTitleClick = () => {
       this.setState((prevState, props) => {
           return { isOpen: !prevState.isOpen }
       });
   }
  render(){
    const {isOpen} = this.state;

    return (
        <AccordionWrapper>
          <AccordionHeader
            handleTitleClick={  this.handleTitleClick }
            title="title"
          />
          <AccordionContent
            isOpen={ isOpen }
            content="content"
          />
        </AccordionWrapper>
      );
    }
}

export default Accordion;
