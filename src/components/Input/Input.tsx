import React, { useState } from 'react';
import styled from 'styled-components';
import { themes } from '../../themes';
import '../../themes/fonts.css';

interface Props {
    placeholder?: string;
    charLimit?: number;
    disabled?: boolean;
}

const InputWrapper = styled.div<{ $disabled?: boolean; }>`
    position: relative;
    background-color: ${themes.colors.white};
    border-radius: ${themes.radius};
    padding: 12px;
    box-shadow: 0px 0px 28px -20px rgba(0,0,0,0.75);

    &:focus-within {
        outline: 2px solid ${themes.colors.highlightPrimary};

        > label:first-child {
            opacity: 1;
            visibility: visible;
            top: -9px;
        }
    }
  
    ${({ $disabled }) => $disabled &&
    `
        background-color: ${themes.colors.secondaryLight};
    `} 
`

const StyledInput = styled.input`
  font-family: "Rethink Sans", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  background-color: transparent;
  border: 0px;
  width: 100%;
  outline: 0;

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
    font-family: "Rethink Sans", sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    top: 0px;
    transition: opacity 0.2s, visibility 0.2s, top 0.2s;
    background-color: ${themes.colors.white};
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    padding: 0 4px;
`

const AmountLabel = styled.label`
    position: absolute;
    font-family: "Rethink Sans", sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    bottom: -9px;
    right: 15px;
    transition: opacity 0.2s, visibility 0.2s, top 0.2s;
    background-color: ${themes.colors.white};
    border-radius: 5px;
    padding: 0 4px;
`

const Input: React.FC<Props> = ({placeholder, charLimit, disabled}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.slice(0, charLimit)); // Enforce charLimit
  };

  return (
    <InputWrapper $disabled={disabled}>
        <PlaceholderLabel>{placeholder}</PlaceholderLabel>
        <StyledInput
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          maxLength={charLimit}
          disabled={disabled}
        />
        {charLimit && <AmountLabel>{`${inputValue.length}/${charLimit}`}</AmountLabel>}
    </InputWrapper>
    );
};

export default Input;
