import styled from 'styled-components';

export const ColorWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ColorCardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0px 0px 21px 6px rgba(0,0,0,0.10);
    width: 250px;
    border-radius: 10px 10px 0 0;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ColorDiv = styled.div<{ $color: string }>`
    width: 100%;
    height: 150px;
    background-color: ${props => props.$color};
    border-radius: 10px 10px 0 0;
`;

export const ColorLabel = styled.label`
    width: 100%;
    height: 100%;
    background-color: #000000;
    color: #ffffff;
    padding: 15px;
    white-space: pre-wrap;
    border-radius: 0 0 10px 10px;
`;

export const ColorCard = ({label, color} : {label: string, color: string}) => {

    return (
        <ColorCardWrapper>
            <ColorDiv $color={color}/>
            <ColorLabel>{`${label}\n${color}`}</ColorLabel>
        </ColorCardWrapper>
    );
}