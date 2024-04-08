import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { themes } from '../../themes';
import '../../themes/fonts.css';

interface Props {
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const DrawerWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: ${themes.colors.primary};
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CloseButton = styled.button`
  font-family: 'Rethink Sans', sans-serif;
  font-size: 1rem;
  padding: 12px;
  background-color: ${themes.colors.primaryDark};
  color: ${themes.colors.highlightPrimary};
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;

  &:focus {
    outline: 2px solid ${themes.colors.primary};
  }
`;

const DrawerContent = styled.div`
  padding: 20px;
  font-family: 'Rethink Sans', sans-serif;
  color: ${themes.colors.primaryLight};
`;

const Drawer: FC<Props> = ({ children, isOpen, onClose }) => {
  return (
    <DrawerWrapper isOpen={isOpen}>
      <CloseButton onClick={onClose}>Close</CloseButton>
      <DrawerContent>
        {children}
      </DrawerContent>
    </DrawerWrapper>
  );
};

export default Drawer;