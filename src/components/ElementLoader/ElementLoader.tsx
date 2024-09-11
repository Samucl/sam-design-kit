import { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { themes } from '../../themes'
import { darkenColor } from '../utils'

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
    background-color: ${themes.colors.primary};
  }
  50% {
    transform: scale(1.5);
    background-color: ${darkenColor(themes.colors.primary, -30)};
  }
`

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const Pill = styled.div`
    width: 8px;
    height: 15px;
    border-radius: 10px;
    background-color: ${themes.colors.primary};
    box-shadow: 0px 0px 10px 2px ${themes.colors.highlightPrimary};
    animation: ${pulseAnimation} 1s infinite ease-in-out;

    &:nth-child(1) {
        animation-delay: 0s;
    }
    &:nth-child(2) {
        animation-delay: 0.2s;
    }
    &:nth-child(3) {
        animation-delay: 0.4s;
    }
    &:nth-child(4) {
        animation-delay: 0.6s;
    }
    &:nth-child(5) {
        animation-delay: 0.8s;
    }
`

const ElementLoader: FC = () => {
    return (
        <LoaderWrapper>
            <Pill />
            <Pill />
            <Pill />
            <Pill />
            <Pill />
        </LoaderWrapper>
    )
}

export default ElementLoader
