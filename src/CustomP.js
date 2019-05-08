import React from 'react';
import styled from 'styled-components';

const P = ({ className, children }) => <p className={className}>{children}</p>;

const CustomP = styled(P)`
  color: blue;
  font-size: 32px;
`;

export { P, CustomP };
