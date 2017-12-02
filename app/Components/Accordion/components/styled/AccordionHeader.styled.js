import styled from 'styled-components';

const AccordionHeaderWrapper = styled.div`
  background: ${ props => props.background ? props.background : '#dedede' };
  padding: 5px 10px;
  border-radius: 3px;
  border: none;
  color: black;
`;

AccordionHeaderWrapper.displayName = 'AccordionHeaderWrapper';

export default AccordionHeaderWrapper;
