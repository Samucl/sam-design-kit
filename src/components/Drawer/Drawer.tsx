import { FC, ReactNode, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { themes } from '../../themes';
import '../../themes/fonts.css';

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right' | 'top' | 'bottom';
}

const DrawerWrapper = styled.div<{ isOpen: boolean; $position: Props['position'] }>`
  position: fixed;
  background-color: ${themes.colors.primary};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  ${(props) => {
    switch (props.$position) {
      case 'left':
        return css`
          top: 0;
          left: 0;
          width: 300px;
          height: 100%;
          transform: ${props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
        `;
      case 'right':
        return css`
          top: 0;
          right: 0;
          width: 300px;
          height: 100%;
          transform: ${props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
        `;
      case 'top':
        return css`
          top: 0;
          left: 0;
          width: 100%;
          height: 300px;
          transform: ${props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
        `;
      case 'bottom':
        return css`
          bottom: 0;
          left: 0;
          width: 100%;
          height: 300px;
          transform: ${props.isOpen ? 'translateY(0)' : 'translateY(100%)'};
        `;
      default:
        return css``;
    }
  }}

  @media (max-width: 768px) {
    width: 100%;
    ${(props) =>
      (props.$position === 'top' || props.$position === 'bottom') &&
      css`
        height: 100vh;
      `}
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

const Drawer: FC<Props> = ({ children, isOpen, onClose, position = 'right' }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <DrawerWrapper isOpen={isOpen} $position={position} ref={drawerRef}>
      <CloseButton onClick={onClose}>Close</CloseButton>
      <DrawerContent>
        {children}
      </DrawerContent>
    </DrawerWrapper>
  );
};

export default Drawer;
