import React from 'react';
import { Image, Flex, Box } from 'rebass';
import img from './decisions-gradient.png';
import styled from 'styled-components';

const Source = styled.p`
  text-align: right;
  font-size: 1.5rem;
`;

export default function DecisionsGradient() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      style={{
        height: '100%',
      }}
    >
      <Box>
        <Image src={img} width="1000px" />
      </Box>
      <Box
        style={{
          width: '100%',
        }}
      >
        <Source>
          <small>
            Source:{' '}
            <a href="https://blog.ploeh.dk/2019/03/18/the-programmer-as-decision-maker/">
              The programmer as decision maker
            </a>
          </small>
        </Source>
      </Box>
    </Flex>
  );
}
