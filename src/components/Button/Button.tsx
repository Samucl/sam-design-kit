import React from 'react';
import styled from 'styled-components';
import { themes } from '../../themes';
import '../../themes/fonts.css';

interface Props {
  value: string;
  isDark?: boolean;
}

const StyledButton = styled.button<{ $isDark?: boolean; }>`
  font-family: "Rethink Sans", sans-serif;
  font-weight: 600;
  padding: 12px;
  color: ${props => props.$isDark ? themes.colors.highlightPrimary : themes.colors.primaryLight};
  border: 2px solid ${themes.colors.highlightPrimary};
  background-color: ${props => props.$isDark ? themes.colors.primaryDark : themes.colors.primary};
  border-radius: ${themes.radius};
  cursor: pointer;
`

const Button: React.FC<Props> = ({ value, isDark=false }) => {
  return <StyledButton $isDark={isDark}>{value}</StyledButton>;
};

export default Button;