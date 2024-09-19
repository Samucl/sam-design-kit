import { FC } from 'react'
import styled from 'styled-components'
import { themes } from '../../themes'

interface TextProps {
    variant:
        | 'heading-1'
        | 'heading-2'
        | 'heading-3'
        | 'subtitle'
        | 'body-1-semibold'
        | 'body-1-regular'
        | 'body-2-semibold'
        | 'body-2-regular'
    color?: string
    children: React.ReactNode
    id?: string
    className?: string
}

const getTextStyle = (variant: string) => {
    const typography = themes.typography[variant]
    return `
    font-size: ${typography['font-size']};
    font-weight: ${typography['font-weight']};
    font-family: ${typography['font-family']};
  `
}

const StyledText = styled.span<{ variant: string; color?: string }>`
    ${({ variant }) => getTextStyle(variant)};
    color: ${({ color }) => color || themes.colors.black};
`

const Text: FC<TextProps> = ({
    variant,
    color = themes.colors.primaryDark,
    children,
    id,
    className,
}) => {
    return (
        <StyledText
            variant={variant}
            color={color}
            id={id}
            className={className}
        >
            {children}
        </StyledText>
    )
}

export default Text
