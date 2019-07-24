import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: yellow;
  border-radius: 16px;
`;

export default function Invert({ children }) {
  return <Container>{children}</Container>;
}
