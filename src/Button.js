import styled, { css } from 'styled-components';

const disabledStyle = css`
  background: transparent;
  color: rgba(0, 0, 0, 0.38);
  border: 2px solid rgba(0, 0, 0, 0.38);
`;

const Button = styled.button`
  min-width: ${(props) => props.minWidth || 64}px;
  background: ${(props) => (props.primary ? 'blue' : 'transparent')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
  font-size: 14px;
  margin: 8px;
  padding: 8px;
  border: ${(props) => (props.primary ? 'none' : `2px solid palevioletred`)};
  border-radius: 3px;
  ${(props) => props.disabled && disabledStyle};
`;

const BlueButton = styled(Button)`
  color: blue;
  border: 2px solid blue;
`;

export default Button;
export { BlueButton };
