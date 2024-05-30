import { FC, ChangeEvent } from 'react'
import styled from 'styled-components'
import { themes } from '../../themes'
import '../../themes/fonts.css'

interface Props {
    children?: React.ReactNode
    isDark?: boolean
    disabled?: boolean
    id?: string
    name?: string
    checked?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const StyledCheckboxWrapper = styled.label<{
    $isDark?: boolean
    $disabled?: boolean
}>`
    display: flex;
    align-items: center;
    font-family: 'Rethink Sans', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: ${(props) =>
        props.$disabled
            ? themes.colors.disabledPrimary
            : themes.colors.primaryDark};
    cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
`

const StyledCheckbox = styled.input<{ $isDark?: boolean }>`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 26px;
    min-height: 26px;
    border-radius: 0.4rem;
    margin: 0;
    margin-right: 0.6rem;
    cursor: pointer;
    box-shadow: ${themes.boxShadow};
    background-color: ${themes.colors.white}; /* Default background color */
    transition: background-color 0.3s ease;

    &::before {
        content: '';
        width: 6px;
        height: 6px;
        clip-path: polygon(
            28% 38%,
            41% 53%,
            75% 24%,
            86% 38%,
            40% 78%,
            15% 50%
        );
        transform: scale(0);
        background-color: ${(props) =>
            props.$isDark
                ? themes.colors.highlightPrimary
                : themes.colors.primaryLight};
        transition: transform 0.3s ease;
    }

    &:checked {
        background-color: ${(props) =>
            props.$isDark ? themes.colors.primaryDark : themes.colors.primary};
    }

    &:checked::before {
        transform: scale(3);
    }

    &:disabled {
        background-color: ${themes.colors.primaryLight};
        box-shadow: none;
    }
`

const Checkbox: FC<Props> = ({
    isDark = false,
    disabled = false,
    id,
    name,
    checked,
    onChange,
    children,
}) => {
    return (
        <StyledCheckboxWrapper $isDark={isDark} $disabled={disabled}>
            <StyledCheckbox
                type='checkbox'
                $isDark={isDark}
                disabled={disabled}
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
            />
            {children}
        </StyledCheckboxWrapper>
    )
}

export default Checkbox
