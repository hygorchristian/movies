import React from 'react';

import { Container, Progress } from './styles';

function Rate({ value }) {
  return (
    <Container>
      <span className="value">{ value }</span>
      <Progress value={value} />
    </Container>
);
}

export default Rate;
