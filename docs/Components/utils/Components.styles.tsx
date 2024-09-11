import styled from "styled-components";
import { PageLoader, themes } from "../../../src";
import { StyledButton } from "../../Guidelines/utils/Guidelines.styles";
import { useState } from "react";

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

export const MobileText = styled.div`
    @media (max-width: 768px) {
        font-size: 2.8vw;
    }
`;

export const CarouselItem = ({label} : {label: string}) => {

    return (
        <CarouselItemWrapper>
            <text>{label}</text>
        </CarouselItemWrapper>
    );

}

export const PageLoaderExample = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <StyledButton onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Click to hide Page Loader" : "Click to show Page Loader"}
            </StyledButton>
        </div>
        {isOpen && <PageLoader />}
        
        </>
    );
}