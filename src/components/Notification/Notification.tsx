import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { themes } from '../../themes'
import { darkenColor } from '../utils'
import '../../themes/fonts.css'
import { Info, Success, Warning, Error } from '../../icons/tsx'

interface Props {
    children: ReactNode
    type: 'success' | 'warning' | 'error' | 'info' | 'neutral'
    isTypeLabel?: boolean
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
    font-weight: 600;
    font-size: 1rem;
    color: ${themes.colors.white};
    background-color: ${(props) => darkenColor(typeColors[props.$type], 70)};
    border: 3px solid ${(props) => darkenColor(typeColors[props.$type], -70)};
    border-radius: ${themes.radius};
    max-width: max-content;
    gap: 10px;
    padding: 10px 12px;
`

const TypeLabel = styled.div<{
    $type: 'success' | 'warning' | 'error' | 'info' | 'neutral'
    $isTypeLabel: boolean
}>`
    display: ${(props) => (props.$isTypeLabel ? 'block' : 'none')};
    position: absolute;
    top: -13px;
    left: 0px;
    padding: 2px 5px;
    font-weight: 600;
    font-size: 0.7rem;
    color: ${themes.colors.white};
    background-color: ${(props) => darkenColor(typeColors[props.$type], 70)};
    border-radius: 10px 10px 0 0;
`

const Divider = styled.div`
    width: 1px;
    height: 30px;
    background-color: ${themes.colors.white};
    opacity: 0.3;
`

const Notification: FC<Props> = ({
    children,
    type = 'neutral',
    id,
    isTypeLabel = true,
}) => {
    return (
        <StyledNotification $type={type} id={id}>
            {type != 'neutral' && (
                <>
                    <TypeLabel $type={type} $isTypeLabel={isTypeLabel}>
                        {type}
                    </TypeLabel>
                    {type == 'success' && (
                        <Success color={themes.colors.white} size='30px' />
                    )}
                    {type == 'warning' && (
                        <Warning color={themes.colors.white} size='30px' />
                    )}
                    {type == 'info' && (
                        <Info color={themes.colors.white} size='30px' />
                    )}
                    {type == 'error' && (
                        <Error color={themes.colors.white} size='30px' />
                    )}
                    <Divider />
                </>
            )}

            {children}
        </StyledNotification>
    )
}

export default Notification
