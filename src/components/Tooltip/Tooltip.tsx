import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { themes } from '../../themes'
import '../../themes/fonts.css'

interface Props {
    children: React.ReactNode
    value: string
    position?: 'top' | 'right' | 'bottom' | 'left'
    isDark?: boolean
    setOpen?: boolean
    hidePointer?: boolean;
}

const TooltipWrapper = styled.div`
    position: relative;
    display: inline-block;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const TooltipContent = styled.div<{
    position: Props['position']
    $isDark: Props['isDark']
    $setOpen: Props['setOpen']
    $hidePointer: Props['hidePointer']
}>`
    font-family: 'Rethink Sans', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    visibility: hidden;
    background-color: ${(props) =>
        props.$isDark ? themes.colors.primaryDark : themes.colors.primary};
    color: ${(props) =>
        props.$isDark
            ? themes.colors.highlightPrimary
            : themes.colors.primaryLight};
    text-align: center;
    opacity: 0;
    border-radius: ${themes.radius};
    padding: 5px 10px;
    position: absolute;
    z-index: 10;
    width: max-content;
    max-width: 200px;
    box-shadow: ${themes.boxShadow};
    transition:
        visibility 0s,
        opacity 0.5s linear;

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }

    ${(props) =>
        props.$setOpen &&
        css`
            visibility: visible;
            opacity: 1;
            animation: ${fadeIn} 0.5s linear forwards;
        `}

    &::after {
        content: '';
        position: absolute;
        border: 2px solid
            ${(props) =>
                props.$isDark
                    ? themes.colors.primaryDark
                    : themes.colors.primary};
        display: block;
        z-index: 1;
    }

    ${(props) =>
        props.$hidePointer &&
        css`
            &::after {
                border: 0;
            }
        `}

    ${(props) => {
        switch (props.position) {
            case 'bottom':
                return css`
                    top: 150%;
                    left: 50%;
                    transform: translateX(-50%);
                    &::after {
                        top: -5px;
                        left: 50%;
                        transform: translateX(-50%) rotate(45deg);
                        border-width: 5px;
                    }
                `
            case 'top':
                return css`
                    bottom: 150%;
                    left: 50%;
                    transform: translateX(-50%);
                    &::after {
                        bottom: -5px;
                        left: 50%;
                        transform: translateX(-50%) rotate(45deg);
                        border-width: 5px;
                    }
                `
            case 'left':
                return css`
                    right: 110%;
                    top: 50%;
                    transform: translateY(-50%);
                    &::after {
                        right: -4px;
                        top: 50%;
                        transform: translateY(-50%) rotate(45deg);
                        border-width: 5px;
                    }
                `
            case 'right':
                return css`
                    left: 110%;
                    top: 50%;
                    transform: translateY(-50%);
                    &::after {
                        left: -4px;
                        top: 50%;
                        transform: translateY(-50%) rotate(45deg);
                        border-width: 5px;
                    }
                `
            default:
                return {}
        }
    }}

    ${TooltipWrapper}:hover & {
        visibility: visible;
        opacity: 1;
        animation: ${fadeIn} 0.2s linear forwards;
    }
`

const Tooltip: React.FC<Props> = ({
    children,
    value: text,
    position = 'top',
    isDark = false,
    setOpen = false,
    hidePointer = false,
}) => {
    return (
        <TooltipWrapper>
            {children}
            <TooltipContent
                position={position}
                $isDark={isDark}
                $setOpen={setOpen}
                $hidePointer={hidePointer}
            >
                {text}
            </TooltipContent>
        </TooltipWrapper>
    )
}

export default Tooltip
