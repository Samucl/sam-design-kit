import { FC, useState } from 'react'
import styled from 'styled-components'
import { themes } from '../../themes'
import '../../themes/fonts.css'
import { EyeSlash, Eye } from '../../icons/tsx'

type Status = 'error' | 'success'

interface Props {
    placeholder?: string
    charLimit?: number
    disabled?: boolean
    isDark?: boolean
    label?: string
    status?: Status
    value?: string
    type?: string
    id?: string
    name?: string
    required?: boolean
    className?: string
}

const InputWrapper = styled.div<{
    $disabled?: boolean
    $isDark?: boolean
    $isLimit?: boolean
    $status?: Status
}>`
    position: relative;
    display: flex;
    background-color: ${themes.colors.white};
    border-radius: ${themes.radius};
    box-shadow: ${themes.boxShadow};

    > input::placeholder {
        color: ${themes.colors.primaryDark};
        opacity: 0.8;
    }

    &:focus-within {
        outline: 2px solid ${themes.colors.highlightPrimary};

        > label:first-child {
            opacity: 1;
            visibility: visible;
            top: -9px;
        }
    }

    ${({ $disabled }) =>
        $disabled &&
        `
      background-color: ${themes.colors.primaryLight};
      > input::placeholder{
        color: ${themes.colors.disabledPrimary};
      }
    `}

    ${({ $isLimit }) =>
        $isLimit &&
        `
      label {
          color: ${themes.colors.statusError};
      }
    `}

    ${({ $isDark }) =>
        $isDark &&
        `
        background-color: ${themes.colors.primaryDark};
        > input {
          color: ${themes.colors.highlightPrimary};
        }
        > input::placeholder{
          color: ${themes.colors.highlightPrimary};
          opacity: 0.8;
        }
        label {
          background-color: ${themes.colors.primaryDark};
          color: ${themes.colors.highlightPrimary};
        }
    `}

  ${({ $status }) =>
        $status === 'error' &&
        `
        > input {
          color:  ${themes.colors.statusError};
        }
        &:focus-within {
          outline: 2px solid ${themes.colors.statusError};
        }
        > label {
          color: ${themes.colors.statusError};
        }
    `} 

  ${({ $status }) =>
        $status === 'success' &&
        `
        > input {
          color:  ${themes.colors.statusSuccess};
        }
        &:focus-within {
          outline: 2px solid ${themes.colors.statusSuccess};
        }
        > label {
          color: ${themes.colors.statusSuccess};
        }
    `}
`

const StyledInput = styled.input`
    font-family: 'Rethink Sans', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    background-color: transparent;
    border: 0px;
    padding: 12px;
    width: 100%;
    outline: 0;
    color: ${themes.colors.primaryDark};

    &:focus::placeholder {
        color: transparent;
    }

    &::selection {
        background-color: ${themes.colors.highlightPrimary};
        color: ${themes.colors.primaryDark};
    }
`

const PlaceholderLabel = styled.label`
    position: absolute;
    font-family: 'Rethink Sans', sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    top: 0px;
    transition:
        opacity 0.2s,
        visibility 0.2s,
        top 0.2s;
    background-color: ${themes.colors.white};
    border-radius: 5px 5px 0 0;
    opacity: 0;
    visibility: hidden;
    padding: 0 4px;
`

const AmountLabel = styled.label`
    position: absolute;
    font-family: 'Rethink Sans', sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    bottom: -9px;
    right: 0px;
    background-color: ${themes.colors.white};
    border-radius: 5px;
    padding: 0 4px;
`

const StyledLabel = styled.label`
    font-family: 'Rethink Sans', sans-serif;
    font-weight: 600;
    font-size: 0.8rem;
    margin-left: 5px;
    color: ${themes.colors.primaryDark};
`

const IconWrapper = styled.div<{ $status?: Status }>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
    padding: 10px;
    padding-left: 0;
    border-radius: 0 calc(${themes.radius} - 2px) calc(${themes.radius} - 2px) 0;
    cursor: pointer;
`

const Input: FC<Props> = ({
    placeholder,
    charLimit,
    disabled,
    isDark,
    label,
    status,
    value = '',
    type,
    id,
    name,
    required,
    className,
}) => {
    const [inputValue, setInputValue] = useState(value)
    const [showPassword, setShowPassword] = useState(false)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value.slice(0, charLimit))
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <InputWrapper
                $disabled={disabled}
                $isDark={isDark}
                $isLimit={inputValue.length === charLimit}
                $status={status}
                className={className}
            >
                <PlaceholderLabel>{placeholder}</PlaceholderLabel>
                <StyledInput
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleInputChange}
                    maxLength={charLimit}
                    disabled={disabled}
                    type={showPassword && type === 'password' ? 'text' : type}
                    id={id}
                    name={name}
                    required={required}
                />
                {charLimit && (
                    <AmountLabel>{`${inputValue.length}/${charLimit}`}</AmountLabel>
                )}
                {type === 'password' && (
                    <IconWrapper onClick={togglePasswordVisibility}>
                        {showPassword ? <EyeSlash /> : <Eye />}
                    </IconWrapper>
                )}
            </InputWrapper>
            {label && <StyledLabel>{label}</StyledLabel>}
        </>
    )
}

export default Input
