import styled from 'styled-components';

const AccordionContentWrapper = styled.div`
  display: ${ props => props.isOpen ? 'block' : 'none' };
  padding: 5px 10px;
`;

AccordionContentWrapper.displayName = 'AccordionContentWrapper';

export default AccordionContentWrapper;
