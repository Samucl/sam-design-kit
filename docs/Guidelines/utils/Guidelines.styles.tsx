import styled from 'styled-components';
import { themes } from '../../../src/themes/index' 
import Codeblock  from '../../Components/utils/Codeblock';
import * as icons from '../../../src/icons/tsx/index';

export const StyledDiv = styled.div`
    height: 100px; 
    background: linear-gradient(180deg, ${themes.colors.secondary} 0%,
        ${themes.colors.highlightSecondary} 100%);
    margin-bottom: 10px;
`;

const ExampleWrapper = styled.div`
    margin-top: 10px;
    width: 40vw;
    min-width: 300px;
    @media (max-width: 768px) {
        width: 100%;
        min-width: 100px;
    }
`;

export const StyledButton = styled.button`
    font-family: 'Rethink Sans', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    background-color: ${themes.colors.primaryDark};
    color: ${themes.colors.secondaryLight};
    padding: 5px 8px;
    border: 0;
    border-radius: ${themes.radius};
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 2.6vw;
    }
`;

export const StyledLabel = styled.label`
    font-weight: 600;
    background-color: ${themes.colors.primaryDark};
    color: ${themes.colors.secondaryLight};
    padding: 5px 8px;
    border: 0;
    border-radius: ${themes.radius};
    @media (max-width: 768px) {
        font-size: 2.6vw;
    }
`;

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

const ColorCombinationForeground = styled.div<{ $primary: string }>`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: ${props => props.$primary};
    border-radius: ${themes.radius};
`;

const ColorCombinationLabel = styled.label<{ $secondary: string }>`
    color: ${props => props.$secondary};
    font-size: 1.6rem;
    font-weight: 700;
    white-space: pre-wrap;
    margin-left: 10px;
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

const FontSizeWrapper = styled.div`
    display: flex;
    justify-content: center;
    text-align: left;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: ${themes.radius};
    padding-top: 20px;
`;

const FontTypeBox = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${themes.colors.secondary};
    border-radius: ${themes.radius};
    width: 100px;
    padding: 10px;
    font-size: 40px;
    font-weight: 800;
    color: ${themes.colors.white};
`;

const FontTypeWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: ${themes.colors.white};
    border-radius: ${themes.radius};
    padding: 10px;
    font-size: 40px;
    font-weight: 800;
    color: ${themes.colors.primaryDark};
    margin-bottom: 20px;
    
    > p {
        margin: 0;
        @media (max-width: 768px) {
            font-size: 5vw;
            font-weight: 800;
        }
    }
`;

const IconsWrapper = styled.div`
    background-color: ${themes.colors.white};
    border-radius: ${themes.radius};
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${themes.colors.white};
    padding: 10px;
    padding-bottom: 5px;
`;

export const ColorCombintation = ({primary, secondary, primaryLabel, secondaryLabel} : {primary: string, secondary: string, primaryLabel: string, secondaryLabel: string}) => {
    return (
        <ColorCardWrapper>
            <ColorCombinationForeground $primary={primary}>
                <ColorCombinationLabel $secondary={secondary}>
                    {`${primaryLabel}\n${secondaryLabel}`}
                </ColorCombinationLabel>
            </ColorCombinationForeground>
        </ColorCardWrapper>
    );
}

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
            <StyledDiv style={{borderRadius: themes.radius}}/>
            <Codeblock codeString={'border-radius: ${themes.radius};'}>
            </Codeblock>
        </ExampleWrapper>
    );
}

export const BoxShadowExample = () => {
    return (
        <ExampleWrapper>
            <StyledDiv style={{boxShadow: themes.boxShadow}}/>
            <Codeblock codeString={'box-shadow: ${themes.boxShadow};'}>
            </Codeblock>
        </ExampleWrapper>
    );
}

export const BlurExample = () => {
    return (
        <ExampleWrapper>
            <StyledDiv style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <h1 style={{margin: '0', filter: themes.blur,}}>Hello there!</h1>
            </StyledDiv>
            <Codeblock codeString={'filter: ${themes.blur}'}>
            </Codeblock>
        </ExampleWrapper>
    );
}

export const IconsExample = () => {
    return (
        <ExampleWrapper>
            <Codeblock codeString=
            {`// Example for "User" icon
import { User } from 'sam-design-kit'

return (
    <User size='30px'/>
)`}>
            </Codeblock>
        </ExampleWrapper>
    );
}

export const FontScales = () => {
    return (
        <>
        <FontTypeWrapper>
            <FontTypeBox>
                Aa
            </FontTypeBox>
            <p>Rethink Sans</p>
        </FontTypeWrapper>
            <FontSizeWrapper>
                <div style={{textAlign: 'left'}}>
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <p style={{fontSize: '28px', fontWeight: '600'}}>Subtitle</p>
                    <p style={{fontSize: '18px', fontWeight: '600'}}>Body 1 (Semibold)</p>
                    <p style={{fontSize: '18px'}}>Body 1 (Regular)</p>
                    <p style={{fontSize: '16px', fontWeight: '600'}}>Body 2 (Semibold)</p>
                    <p style={{fontSize: '16px'}}>Body 2 (Regular)</p>
                </div>
            </FontSizeWrapper>
        </>
    );
}

export const FontWeights = () => {
    return (
        <>
            <FontTypeWrapper style={{fontSize: '20px', paddingLeft: '20px'}}>
                <p>5 Font weights available</p>
            </FontTypeWrapper>
            <FontSizeWrapper>
                <div style={{textAlign: 'left'}}>
                    <p style={{fontWeight: '400'}}>400 - Regular</p>
                    <p style={{fontWeight: '500'}}>500 - Medium</p>
                    <p style={{fontWeight: '600'}}>600 - Semibold</p>
                    <p style={{fontWeight: '700'}}>700 - Bold</p>
                    <p style={{fontWeight: '800'}}>800 - Extrabold</p>
                </div>
            </FontSizeWrapper>
        </>
    );
}

type IconName = keyof typeof icons;

const AllIcons = () => {
    return (
        <>
            {Object.keys(icons).map((iconName) => {
                const IconSvg = icons[iconName as IconName];
                return (
                    <IconWrapper key={iconName}>
                        <IconSvg size='40px'/>
                        {iconName}
                    </IconWrapper>
                );
            })}
        </>
    );
    
}

export const Icons = () => {
    return (
        <IconsWrapper>
            <AllIcons />
        </IconsWrapper>
    );
}