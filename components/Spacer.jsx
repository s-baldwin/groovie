import styled from 'styled-components';

const Spacer = ({ size, children }) => {
  return <Box size={size}>{children}</Box>;
};

const Box = styled.div`
  flex-basis: ${(p) => p.size};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Spacer;
