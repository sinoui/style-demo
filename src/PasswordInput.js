import styled from 'styled-components';

const PasswordInput = styled.input.attrs({
  type: 'password',
  margin: (props) => props.size || '1em',
  padding: (props) => props.size || '1em',
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed props */
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export default PasswordInput;
