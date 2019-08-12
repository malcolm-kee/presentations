import React from 'react';
import { Image, Flex, Box } from 'rebass';
import img from './type-of-disability.png';

export default function TypeofDisability() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      style={{
        height: '100%',
      }}
    >
      <Box>
        <Image src={img} />
      </Box>
    </Flex>
  );
}
