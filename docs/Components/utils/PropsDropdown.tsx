import React, { useState } from 'react';
import styled from 'styled-components';
import { themes } from '../../../src/themes';

interface Props {
  children: React.ReactElement
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
`

const StyledTable = styled.table`
  margin-top: 40px;
`

const PropsDropdown: React.FC<Props> = ({ children }) => {

  const [showProps, setShowProps] = useState(false)

    const handleShowProps = () => {
      setShowProps(!showProps)
    }

    return (
      <>
        <StyledButton onClick={handleShowProps}>Show props</StyledButton>
      {showProps &&
        <StyledTable>
        { children }
        </StyledTable>
      }
      </>
    );
  };
  
  export default PropsDropdown;