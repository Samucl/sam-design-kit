import React from 'react';
import styled from 'styled-components';
import { colors } from '@site/src/themes';

interface Props {
  message: string;
}

const StyledButton = styled.button`
  font-family: 'RethinkSans';
  padding: 12px;
  border: 2px solid ${colors.highlightPrimary};
  background-color: ${colors.primaryDark};
  color: white;
  border-radius: 10px;
  cursor: pointer;
`

const Button: React.FC<Props> = ({ message }) => {
  return <StyledButton>{message}</StyledButton>;
};

export default Button;