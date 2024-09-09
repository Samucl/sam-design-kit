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

const StyledNotification = styled.div<{
    $type: 'success' | 'warning' | 'error' | 'info' | 'neutral'
}>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Rethink Sans', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => darkenColor(typeColors[props.$type], 200)};
    background-color: ${(props) => typeColors[props.$type]};
    border: 3px solid ${(props) => darkenColor(typeColors[props.$type], 30)};
    border-radius: ${themes.radius};
    width: max-content;
    gap: 10px;
    padding: 10px 15px;
`

const TypeLabel = styled.div<{
    $type: 'success' | 'warning' | 'error' | 'info' | 'neutral'
}>`
    position: absolute;
    top: -13px;
    left: 0px;
    padding: 2px 5px;
    font-weight: 800;
    font-size: 0.7rem;
    color: ${(props) => darkenColor(typeColors[props.$type], 200)};
    background-color: ${(props) => typeColors[props.$type]};
    border-radius: 10px;
`

const Notification: FC<Props> = ({ children, type = 'neutral', id }) => {
    return (
        <StyledNotification $type={type} id={id}>
            {type != 'neutral' && (
                <>
                    <TypeLabel $type={type}>{type}</TypeLabel>
                    <text>asd</text>
                    <text>|</text>
                </>
            )}

            {children}
        </StyledNotification>
    )
}

export default Notification
