import React from 'react'
import styled from 'styled-components'
import { themes } from '../../themes'
import '../../themes/fonts.css'

interface Props {
    value: string
    isDark?: boolean
    disabled?: boolean
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

const Button: React.FC<Props> = ({ value, isDark = false, disabled }) => {
    return (
        <StyledButton $isDark={isDark} disabled={disabled}>
            {value}
        </StyledButton>
    )
}

export default Button
