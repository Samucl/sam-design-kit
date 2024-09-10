import { useState, FC, ReactNode } from 'react'
import styled from 'styled-components'
import { themes } from '../../themes'
import '../../themes/fonts.css'

interface CarouselProps {
    children: ReactNode[]
    isDark?: boolean
    visibleItems?: number
}

interface ArrowButtonProps {
    $isDark?: boolean
}

const CarouselWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const IndicatorContainer = styled.div<{ $isDark?: boolean }>`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    border-radius: 50%;
    background-color: ${(props) =>
        props.$isDark ? themes.colors.primaryDark : themes.colors.primary};
    padding: 7px 5px;
    border-radius: ${themes.radius};
`

const Indicator = styled.div<{ isActive: boolean; $isDark?: boolean }>`
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: ${(props) =>
        props.isActive
            ? props.$isDark
                ? themes.colors.highlightPrimary
                : themes.colors.primaryLight
            : props.$isDark
              ? themes.colors.primary
              : themes.colors.primaryDark};
`

const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 10px;
`

const CarouselContent = styled.div<{
    currentIndex: number
    visibleItems: number
}>`
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: ${(props) =>
        `translateX(-${(props.currentIndex * 100) / props.visibleItems}%)`};
    width: ${(props) =>
        `${props.children.length * (100 / props.visibleItems)}%`};
`

const CarouselItem = styled.div<{ visibleItems: number }>`
    min-width: ${(props) => `${100 / props.visibleItems}%`};
    display: flex;
    justify-content: center;
    align-items: center;
`

const ArrowButton = styled.button<ArrowButtonProps>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${(props) =>
        props.$isDark ? themes.colors.primaryDark : themes.colors.primary};
    color: ${(props) =>
        props.$isDark
            ? themes.colors.highlightPrimary
            : themes.colors.primaryLight};
    border: none;
    border-radius: ${themes.radius};
    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
    font-family: 'Rethink Sans', sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    z-index: 2;

    &:focus {
        outline: 2px solid ${themes.colors.primary};
    }
`

const ArrowLeft = styled(ArrowButton)`
    left: 10px;
    &:hover {
        opacity: 45%;
    }
`

const ArrowRight = styled(ArrowButton)`
    right: 10px;
    &:hover {
        opacity: 45%;
    }
`

const Carousel: FC<CarouselProps> = ({
    children,
    isDark = false,
    visibleItems = 1,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const totalItems = children.length
    const totalGroups =
        totalItems > visibleItems ? totalItems - visibleItems + 1 : 1

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : totalGroups - 1,
        )
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < totalGroups - 1 ? prevIndex + 1 : 0,
        )
    }

    return (
        <CarouselWrapper>
            <IndicatorContainer $isDark={isDark}>
                {Array.from({ length: totalGroups }).map((_, index) => (
                    <Indicator
                        key={index}
                        isActive={index === currentIndex}
                        $isDark={isDark}
                    />
                ))}
            </IndicatorContainer>
            <CarouselContainer>
                <ArrowLeft onClick={handlePrev} $isDark={isDark}>
                    {'<'}
                </ArrowLeft>
                <CarouselContent
                    currentIndex={currentIndex}
                    visibleItems={visibleItems}
                >
                    {children.map((child, index) => (
                        <CarouselItem key={index} visibleItems={visibleItems}>
                            {child}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <ArrowRight onClick={handleNext} $isDark={isDark}>
                    {'>'}
                </ArrowRight>
            </CarouselContainer>
        </CarouselWrapper>
    )
}

export default Carousel
