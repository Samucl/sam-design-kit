import React from 'react';
import styled from 'styled-components';
import { colors } from '../../themes';

interface Props {
  message: string;
}

const StyledButton = styled.button`
  font-family: 'RethinkSans', sans-serif;
  padding: 12px;
  border: 2px solid ${colors.highlightPrimary};
  background-color: ${colors.primaryDark};
  color: white;
  border-radius: 10px;
  cursor: pointer;
`

const Button: React.FC<Props> = ({ message }) => {
  return <><h1>Testi RethinkSans</h1><StyledButton>{message}</StyledButton></>;
};

export default Button;