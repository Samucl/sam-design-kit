import { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { themes } from '../../themes'
import '../../themes/fonts.css'
import { X } from '../../icons/tsx'

interface Props {
    children?: ReactNode
    isOpen: boolean
    onClose: () => void
    position?: 'left' | 'right' | 'top' | 'bottom'
    isDark?: boolean
    id?: string
    className?: string
}

const DrawerWrapper = styled.div<{
    isOpen: boolean
    $position: Props['position']
    $isDark: boolean
}>`
    position: fixed;
    background-color: ${(props) =>
        props.$isDark ? themes.colors.primaryDark : themes.colors.primary};
    border-radius: ${themes.radius};
    margin: 15px;
    transition:
        transform 0.3s ease-in-out,
        visibility 0.3s ease-in-out;
    z-index: 1001;
    visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};

    ${(props) => {
        switch (props.$position) {
            case 'left':
                return css`
                    top: 0;
                    left: 0;
                    width: 300px;
                    height: calc(100% - 30px);
                    transform: ${props.isOpen
                        ? 'translateX(0)'
                        : 'translateX(-100%)'};
                `
            case 'right':
                return css`
                    top: 0;
                    right: 0;
                    width: 300px;
                    height: calc(100% - 30px);
                    transform: ${props.isOpen
                        ? 'translateX(0)'
                        : 'translateX(100%)'};
                `
            case 'top':
                return css`
                    top: 0;
                    left: 0;
                    width: calc(100% - 30px);
                    height: 300px;
                    transform: ${props.isOpen
                        ? 'translateY(0)'
                        : 'translateY(-100%)'};
                `
            case 'bottom':
                return css`
                    bottom: 0;
                    left: 0;
                    width: calc(100% - 30px);
                    height: 300px;
                    transform: ${props.isOpen
                        ? 'translateY(0)'
                        : 'translateY(100%)'};
                `
            default:
                return css``
        }
    }}
    @media (max-width: 768px) {
        width: calc(100% - 30px);
        ${(props) =>
            (props.$position === 'top' || props.$position === 'bottom') &&
            css`
                height: calc(100% - 30px);
            `}
    }
`

const CloseButton = styled.button<{ $isDark: boolean }>`
    font-family: 'Rethink Sans', sans-serif;
    font-size: 1rem;
    padding: 8px;
    background-color: ${(props) =>
        props.$isDark ? themes.colors.primary : themes.colors.primaryDark};
    color: ${(props) =>
        props.$isDark
            ? themes.colors.primaryLight
            : themes.colors.highlightPrimary};
    border: none;
    cursor: pointer;
    position: absolute;
    border-radius: 0 ${themes.radius} 0 ${themes.radius};
    top: 0;
    right: 0;
    display: flex;

    &:focus {
        outline: 2px solid ${themes.colors.primary};
    }
`

const DrawerContent = styled.div<{ $isDark: boolean }>`
    padding: 20px;
    font-family: 'Rethink Sans', sans-serif;
    font-size: 1rem;
    color: ${(props) =>
        props.$isDark
            ? themes.colors.highlightPrimary
            : themes.colors.primaryLight};
`

const DrawerOverlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: ${(props) => (props.isOpen ? themes.blur : 'none')};
    transition:
        backdrop-filter 225ms cubic-bezier(0.4, 0, 0.2, 1),
        background-color 225ms ease;
    visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
    z-index: 1000;
`

const Drawer: FC<Props> = ({
    children,
    isOpen,
    onClose,
    position = 'right',
    isDark = false,
    id,
    className,
}) => {
    return (
        <>
            <DrawerOverlay
                isOpen={isOpen}
                onClick={onClose}
                aria-hidden='true'
                className={className}
                id={id}
            />
            <DrawerWrapper
                isOpen={isOpen}
                $position={position}
                onClick={(e) => e.stopPropagation()}
                $isDark={isDark}
            >
                <CloseButton
                    $isDark={isDark}
                    onClick={(e) => {
                        e.stopPropagation()
                        onClose()
                    }}
                >
                    <X color={themes.colors.primaryLight} />
                </CloseButton>
                <DrawerContent $isDark={isDark}>{children}</DrawerContent>
            </DrawerWrapper>
        </>
    )
}

export default Drawer
