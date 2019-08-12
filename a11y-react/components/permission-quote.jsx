import React from 'react';
import styled from 'styled-components';

const Block = styled.blockquote`
  position: relative;
`;

const P = styled.p`
  font-size: 1.8em;
`;

const Footer = styled.footer`
  color: #999;
  font-size: 0.8em;
`;

export default function PermissionQuote() {
  return (
    <Block>
      <P>It's easier to ask forgiveness than it is to get permission.</P>
      <Footer>
        &mdash;<cite>Grace Hopper</cite>
      </Footer>
    </Block>
  );
}
