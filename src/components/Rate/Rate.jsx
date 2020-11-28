import React from 'react';

import { Container, Progress } from './styles';

function Rate({ value, size, ...props }) {
  return (
    <Container size={size} {...props}>
      <span className="value">{ value }</span>
      <Progress value={value} size={size} />
    </Container>
);
}

export default Rate;
