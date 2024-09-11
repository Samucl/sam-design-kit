import { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { themes } from '../../themes'

const loadingAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`

const LoaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: ${themes.colors.primary};
    z-index: 9999;
    box-shadow: 0px 0px 33px 5px ${themes.colors.primary};
`

const LoadingBar = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${themes.colors.primary};
    background: linear-gradient(
        90deg,
        ${themes.colors.primary} 0%,
        ${themes.colors.highlightPrimary} 25%,
        ${themes.colors.primaryLight} 75%,
        ${themes.colors.primary} 100%
    );
    transform: translateX(-100%);
    animation: ${loadingAnimation} 1.5s infinite linear;
`

const PageLoader: FC = () => {
    return (
        <LoaderWrapper>
            <LoadingBar />
        </LoaderWrapper>
    )
}

export default PageLoader
