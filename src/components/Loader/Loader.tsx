import { FC } from 'react'
import styled, { keyframes } from 'styled-components'

interface Props {
    top?: string
}

const pulseAnimation = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  50% {
    transform: translateX(100%);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const pulseEffect = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const LoaderWrapper = styled.div<{ $top?: string }>`
    position: absolute;
    top: ${(props) => props.$top};
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`

const LoaderDot = styled.div`
    width: 12px;
    height: 12px;
    margin: 0 4px;
    background-color: #3498db;
    border-radius: 50%;
    animation:
        ${pulseAnimation} 1.5s ease-in-out infinite,
        ${pulseEffect} 1.5s ease-in-out infinite;
`

const Loader: FC<Props> = ({ top = '20px' }) => {
    return (
        <LoaderWrapper $top={top}>
            <LoaderDot />
            <LoaderDot />
            <LoaderDot />
            <LoaderDot />
            <LoaderDot />
            <LoaderDot />
            <LoaderDot />
        </LoaderWrapper>
    )
}

export default Loader
