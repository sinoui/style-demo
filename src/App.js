import React from 'react';
import Wrapper from './Wrapper';
import H1 from './H1';
import Button, { BlueButton } from './Button';
import { P, CustomP } from './CustomP';
import PasswordInput from './PasswordInput';
import Rotate from './Rotate';

function App() {
  return (
    <>
      <Wrapper>
        <H1>Hello,This is a demo of style components!</H1>
      </Wrapper>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
      <Button disabled>Disabled Button</Button>
      <BlueButton>Blue Button</BlueButton>
      <Button as="a" href="https://www.styled-components.com">
        Link Button
      </Button>
      <P>这是一段普通的文本内容</P>
      <CustomP>这是一段自定义样式的文本内容</CustomP>
      <PasswordInput placeholder="请输入密码" size="0.25rem" />
      <Rotate>旋转</Rotate>
    </>
  );
}

export default App;
