import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { themes } from '../../themes'
import { darkenColor } from '../utils'
import '../../themes/fonts.css'

interface Props {
    children: ReactNode
    type: 'success' | 'warning' | 'error' | 'info' | 'neutral'
    id?: string
}

const typeColors = {
    success: themes.colors.statusSuccess,
    warning: themes.colors.statusWarning,
    error: themes.colors.statusError,
    info: themes.colors.statusInfo,
    neutral: themes.colors.statusNeutral,
}

const StyledNotification = styled.div<{ $type: 'success' | 'warning' | 'error' | 'info' | 'neutral' }>`
    font-family: 'Rethink Sans', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => darkenColor(typeColors[props.$type], 200)};
    background-color: ${(props) => typeColors[props.$type]};
    border: 3px solid ${(props) => darkenColor(typeColors[props.$type], 30)};
    border-radius: ${themes.radius};
`

const Notification: FC<Props> = ({ children, type = 'neutral', id }) => {
    return (
        <StyledNotification $type={type} id={id}>
            {children}
        </StyledNotification>
    )
}

export default Notification