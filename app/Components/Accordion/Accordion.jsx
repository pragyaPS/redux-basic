import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AccordionHeader from './AccordionHeader.jsx';
import AccordionContent from './AccordionContent.jsx';

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
      this.state= { isOpen: this.props.isDefaultOpen }
    }
    render(){
        return (<div>
            <AccordionHeader handleTitleClick={  this.handleTitleClick }
            background="red"
            title="title" />
            
             <AccordionContent isOpen={ this.state.isOpen }
             content="content" />
             </div>);
    }
   
   handleTitleClick = () => {
        this.setState((prevState, props) => {
            return { isOpen: !prevState.isOpen }
        });
    }
}

export default Accordion;

