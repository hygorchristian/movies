import React from 'react';

import { Container, Content, Progress } from './styles';

function Header({ loading }) {
  return (
    <Container>
      <Content>
        <h2>My favourite movies</h2>
      </Content>
      {loading && <Progress />}
    </Container>
);
}

export default Header;
