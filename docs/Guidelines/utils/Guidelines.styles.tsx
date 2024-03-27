import styled from 'styled-components';
import { themes } from '../../../src/themes/index' 
import Codeblock  from '../../Components/utils/Codeblock';

const StyledDiv = styled.div`
    height: 100px; 
    background: linear-gradient(180deg, ${themes.colors.secondary} 0%,
        ${themes.colors.primaryLight} 90%,
        ${themes.colors.primaryLight} 100%);
    border-radius: ${themes.radius};
    margin-bottom: 10px;
`
const ExampleWrapper = styled.div`
    margin-top: 10px;
    width: 30vw;
    min-width: 300px;
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
`

export const StyledLabel = styled.label`
    font-weight: 600;
    background-color: ${themes.colors.primaryDark};
    color: ${themes.colors.secondaryLight};
    padding: 5px 8px;
    border-radius: ${themes.radius};
    @media (max-width: 768px) {
        font-size: 2.6vw;
    }
`

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

const ColorCardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0px 0px 21px 6px rgba(0,0,0,0.10);
    width: 250px;
    border-radius: ${themes.radius};
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ColorDiv = styled.div<{ $color: string }>`
    width: 100%;
    height: 150px;
    background-color: ${props => props.$color};
    border-radius: ${themes.radius} ${themes.radius} 0 0;
`;

const ColorLabel = styled.label`
    width: 100%;
    height: 100%;
    background-color: #000000;
    color: #ffffff;
    padding: 15px;
    white-space: pre-wrap;
    border-radius: 0 0 ${themes.radius} ${themes.radius};
`;

export const ColorCard = ({label, color} : {label: string, color: string}) => {

    return (
        <ColorCardWrapper>
            <ColorDiv $color={color}/>
            <ColorLabel>{`${label}\n${color}`}</ColorLabel>
        </ColorCardWrapper>
    );
}

export const BorderRadiusExample = () => {
    return (
        <ExampleWrapper>
            <StyledDiv></StyledDiv>
            <Codeblock codeString={'border-radius: ${themes.radius};'}>
            </Codeblock>
        </ExampleWrapper>
    );
}

export const BoxShadowExample = () => {
    return (
        <ExampleWrapper>
            <StyledDiv style={{background: "white", boxShadow: themes.boxShadow}}></StyledDiv>
            <Codeblock codeString={'box-shadow: ${themes.boxShadow};'}>
            </Codeblock>
        </ExampleWrapper>
    );
}