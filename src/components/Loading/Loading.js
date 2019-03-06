import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

class Loader extends React.Component {
  render() {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }
}

export default Loader;
