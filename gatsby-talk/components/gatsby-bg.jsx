import styled from '@emotion/styled';

const GatsbyBg = styled.div({
  width: '100vw',
  height: '100vh',
  padding: 32,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#663399',
  color: '#fff',
  '& a': {
    color: 'inherit'
  }
});

export default GatsbyBg;
