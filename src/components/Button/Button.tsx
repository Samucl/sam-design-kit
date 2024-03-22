import React from 'react';
import styled from 'styled-components';
import { colors } from '../../themes';
import '../../fonts/fonts.css';

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

const StyledHeader = styled.h1`
  font-family: 'RethinkSans', sans-serif;
  font-weight: 800;
`

const Button: React.FC<Props> = ({ message }) => {
  return <><StyledHeader>Testi RethinkSans</StyledHeader><StyledButton>{message}</StyledButton></>;
};

export default Button;