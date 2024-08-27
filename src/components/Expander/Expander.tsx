import { useState, FC, ReactNode } from 'react'
import styled from 'styled-components'
import { themes } from '../../themes'
import '../../themes/fonts.css'
import { ChevronDown, ChevronUp } from '../../icons/tsx'

type Theme = 'dark' | 'transparent'

interface ExpanderProps {
    title: string
    children: ReactNode
    isOpenInitially?: boolean
    theme?: Theme
}

const ExpanderContainer = styled.div`
    border-radius: ${themes.radius};
    overflow: hidden;
    font-family: 'Rethink Sans', sans-serif;
`

const ExpanderHeader = styled.button<{ $theme?: Theme }>`
    width: 100%;
    background-color: ${(props) =>
        props.$theme === 'transparent'
            ? 'transparent'
            : props.$theme === 'dark'
              ? themes.colors.primaryDark
              : themes.colors.primary};
    color: ${(props) =>
        props.$theme === 'transparent'
            ? themes.colors.black
            : props.$theme === 'dark'
              ? themes.colors.highlightPrimary
              : themes.colors.primaryLight};
    padding: 5px 15px;
    text-align: left;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.6s ease;

    &:focus {
        outline: 2px solid ${themes.colors.highlightPrimary};
    }
`

const ExpanderContent = styled.div<{
    $isOpen: boolean
    $theme?: 'dark' | 'transparent'
}>`
    max-height: ${(props) => (props.$isOpen ? '1000px' : '0')};
    padding: ${(props) => (props.$isOpen ? '12px' : '0 12px')};
    background-color: ${(props) =>
        props.$theme === 'transparent'
            ? 'transparent'
            : props.$theme === 'dark'
              ? themes.colors.primaryDark
              : themes.colors.white};
    color: ${(props) =>
        props.$theme === 'transparent'
            ? themes.colors.black
            : props.$theme === 'dark'
              ? themes.colors.highlightPrimary
              : themes.colors.black};
    transition:
        max-height 0.1s ease,
        padding 0.1s;
    overflow: hidden;
`

const Expander: FC<ExpanderProps> = ({
    title,
    children,
    isOpenInitially = false,
    theme,
}) => {
    const [isOpen, setIsOpen] = useState(isOpenInitially)

    const toggleExpander = () => setIsOpen(!isOpen)

    return (
        <ExpanderContainer>
            <ExpanderHeader onClick={toggleExpander} $theme={theme}>
                {title}
                {isOpen ? (
                    <ChevronUp
                        color={
                            theme === 'transparent'
                                ? themes.colors.black
                                : theme === 'dark'
                                  ? themes.colors.highlightPrimary
                                  : themes.colors.primaryLight
                        }
                        size='2rem'
                    />
                ) : (
                    <ChevronDown
                        color={
                            theme === 'transparent'
                                ? themes.colors.black
                                : theme === 'dark'
                                  ? themes.colors.highlightPrimary
                                  : themes.colors.primaryLight
                        }
                        size='2rem'
                    />
                )}
            </ExpanderHeader>
            <ExpanderContent $isOpen={isOpen} $theme={theme}>
                {children}
            </ExpanderContent>
        </ExpanderContainer>
    )
}

export default Expander
