import styled, { keyframes } from 'styled-components';

const rotateStyle = keyframes`
    from {
    transform: rotate(0deg);
  }

    to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotateStyle} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export default Rotate;
