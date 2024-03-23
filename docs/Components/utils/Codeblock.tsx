import React from 'react';
import styled from 'styled-components';
import { themes } from '../../../src/themes';

interface Props {
    children: React.ReactNode;
}
  
const Box = styled.div`
  padding: 12px;
  width: 100%;
  background-color: ${themes.colors.white};
  border-radius: ${themes.radius};
  cursor: pointer;
`

const Codeblock: React.FC<Props> = ({ children }) => {
  return <Box>{ children }</Box>;
};

export default Codeblock;