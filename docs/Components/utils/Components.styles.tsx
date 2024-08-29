import styled from "styled-components";
import { themes } from "../../../src";

const CarouselItemWrapper = styled.div`
    background-color: white;
    padding: 15px;
    border-radius: ${themes.radius};
`;

export const CarouselItem = ({label} : {label: string}) => {

    return (
        <CarouselItemWrapper>
            <text>{label}</text>
        </CarouselItemWrapper>
    );

}