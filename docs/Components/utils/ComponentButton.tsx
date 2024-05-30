import React, { useState } from 'react';
import styled from 'styled-components';
import { themes } from '../../../src/themes';

interface Props {
  children?: React.ReactElement
  value?: string
  link?: string
}

const StyledButton = styled.button`
  font-family: 'Rethink Sans', sans-serif;
  font-weight: 600;
  font-size: 0.8rem;  
  border: 0;
  padding: 6px 10px;
  background-color: rgba(0, 0, 0, 0.05);
  color: ${themes.colors.primaryDark};
  border-radius: ${themes.radius};
  cursor: pointer;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const StyledTable = styled.table`
  margin-top: 40px;
`

export const PropsDropdown: React.FC<Props> = ({ children, value, link }) => {
  const [showProps, setShowProps] = useState(false);

  const handleShowProps = () => {
    setShowProps(!showProps);
  };

  return (
    <>
      <ButtonWrapper>
        {children && <StyledButton onClick={handleShowProps}>Show props</StyledButton>}
        {link && value && (
          <a href={link}>
            <StyledButton>{value}</StyledButton>
          </a>
        )}
      </ButtonWrapper>
      {showProps && children && (
        <StyledTable>
          {children}
        </StyledTable>
      )}
    </>
  );
};