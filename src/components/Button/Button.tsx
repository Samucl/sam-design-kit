import { FC, ReactNode, MouseEvent } from 'react'
import styled from 'styled-components'
import { themes } from '../../themes'
import '../../themes/fonts.css'

interface Props {
    children?: ReactNode
    isDark?: boolean
    disabled?: boolean
    id?: string
    name?: string
    className?: string
    onClick?: (e: MouseEvent<HTMLElement>) => void
    onMouseDown?: (e: MouseEvent<HTMLElement>) => void
}

const StyledButton = styled.button<{ $isDark?: boolean }>`
    font-family: 'Rethink Sans', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    padding: 12px;
    color: ${(props) =>
        props.$isDark
            ? themes.colors.highlightPrimary
            : themes.colors.primaryLight};
    border: 2px solid ${themes.colors.highlightPrimary};
    background-color: ${(props) =>
        props.$isDark ? themes.colors.primaryDark : themes.colors.primary};
    border-radius: ${themes.radius};
    cursor: pointer;

    &:focus {
        outline: 2px solid ${themes.colors.primary};
    }

    &:disabled {
        background-color: ${themes.colors.primaryLight};
        color: ${themes.colors.disabledPrimary};
        border: 0;
    }
`

const Button: FC<Props> = ({
    isDark = false,
    disabled = false,
    children,
    onClick,
    onMouseDown,
    id,
    name,
}) => {
    return (
        <StyledButton
            $isDark={isDark}
            disabled={disabled}
            onClick={onClick}
            onMouseDown={onMouseDown}
            id={id}
            name={name}
        >
            {children}
        </StyledButton>
    )
}

export default Button
