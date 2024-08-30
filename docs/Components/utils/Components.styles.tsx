import styled from "styled-components";
import { themes } from "../../../src";

export const DimBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 50%;
`

const CarouselItemWrapper = styled.div`
    background-color: white;
    padding: 10px;
    border-radius: ${themes.radius};
    font-size: 1.5vw;
    font-weight: 600;
    @media (max-width: 768px) {
        font-size: 2.2vw;
    }
`;

export const CarouselItem = ({label} : {label: string}) => {

    return (
        <CarouselItemWrapper>
            <text>{label}</text>
        </CarouselItemWrapper>
    );

}