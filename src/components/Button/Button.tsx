import React from 'react';
import styled from 'styled-components';
import { colors } from '../../themes';
import '../../themes/fonts.css';

interface Props {
  message: string;
}

const StyledButton = styled.button`
  font-family: "Rethink Sans", sans-serif;
  font-weight: 600;
  padding: 12px;
  color: white;
  border: 2px solid ${colors.highlightPrimary};
  background-color: ${colors.primaryDark};
  border-radius: 10px;
  cursor: pointer;
`

const Button: React.FC<Props> = ({ message }) => {
  return <StyledButton>{message}</StyledButton>;
};

export default Button;