import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { themes } from '../../../src/themes';
import CodeBlock from '@theme/CodeBlock';

interface Props {
  children?: React.ReactNode;
  codeString?: string;
}

const Box = styled.div<{ $isVisible?: boolean; }>`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 10px;
  border-radius: ${themes.radius};
  ${({ $isVisible }) => $isVisible && css`
    border-radius: ${themes.radius} ${themes.radius} 0 0;
  `}
`

const CodeBlockToggle = styled.button`
  font-family: "Rethink Sans", sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
  background-color: rgba(0, 0, 0, 0.05);
  border: 0;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: ${themes.radius};
  display: block;
`

const StyledCodeBlock = styled(CodeBlock)<{ $isVisible?: boolean; }>`
  border-radius: 0 0 ${themes.radius} ${themes.radius};
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.3s ease;
  opacity: 0;
  margin-bottom: 5px;
  ${({ $isVisible }) => $isVisible && css`
    max-height: 500px;
    opacity: 1;
  `}
`

const Codeblock: React.FC<Props> = ({ children, codeString }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
    {children &&
      <Box $isVisible={isVisible}>
        {children}
      </Box>
    }
      <StyledCodeBlock language="jsx" $isVisible={isVisible}>
        {codeString}
      </StyledCodeBlock>
      <CodeBlockToggle onClick={toggleVisibility}>
        {isVisible ? 'Hide code' : 'Show code'}
      </CodeBlockToggle>
    </>
  );
};

export default Codeblock;
