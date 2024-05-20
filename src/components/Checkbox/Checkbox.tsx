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

const StyledCheckboxWrapper = styled.label<{ $isDark?: boolean, $disabled?: boolean }>`
    display: flex;
    align-items: center;
    font-family: 'Rethink Sans', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: ${(props) =>
        props.$isDark
            ? themes.colors.highlightPrimary
            : themes.colors.primaryLight};
    cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
`

const StyledCheckbox = styled.input<{ $isDark?: boolean }>`
    margin-right: 8px;
    width: 16px;
    height: 16px;
    border: 2px solid ${themes.colors.highlightPrimary};
    background-color: ${(props) =>
        props.$isDark ? themes.colors.primaryDark : themes.colors.primary};
    border-radius: ${themes.radius};
    cursor: pointer;

    &:disabled {
        background-color: ${themes.colors.primaryLight};
        border: 0;
        cursor: not-allowed;
    }

    &:checked {
        background-color: ${themes.colors.highlightPrimary};
    }
`

const Checkbox: FC<Props> = ({ isDark = false, disabled = false, id, name, checked, onChange, children }) => {
    return (
        <StyledCheckboxWrapper $isDark={isDark} $disabled={disabled}>
            <StyledCheckbox
                type="checkbox"
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
