import React, { useState } from "react";
import styled, { css, createGlobalStyle } from 'styled-components';
import { WindupChildren, CharWrapper } from "windups";

import lightbulb from "./assets/lightbulb.png";

const StyledContainer = styled.div`
    font-family: 'Courier New', Courier, monospace; /* Typewriter font */
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    font-size: 36px;
`;

const animationStyles = css`
    display: inline-block;
    animation: ${props => props.jump ? "jump 0.5s infinite" : "fadeIn 0.5s forwards"};
`;

const StyledSpan = styled.span`
    ${props => props.char !== ' ' ? animationStyles : ''}
    color: ${props => props.color === 'black' ? 'white' : props.color};
`;

const GlobalStyle = createGlobalStyle`
    body {
        background-color: black; /* Set the background color to white */
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @keyframes jump {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
`;

function TextAnimation() {
    const introPrefix = "Welcome to our ";
    const introHighlight = "S&T Presentation";
    const introSuffix = "!";

    const byLinePrefix = "By ";
    const names1 = "Anissa, Ana, Ashley, ";
    const conjunction = "and ";
    const names2 = "Gary";

    const [introComplete, setIntroComplete] = useState(false);

    const handleIntroComplete = () => {
        setIntroComplete(true);
    };

    return (
        <>
            <GlobalStyle />
            <StyledContainer>
                <WindupChildren onFinished={handleIntroComplete}>
                    {introPrefix.split("").map((char, index) => (
                        <CharWrapper key={index} element={props => <StyledSpan {...props} char={char} color="black"/>}>
                            {char}
                        </CharWrapper>
                    ))}
                    {introHighlight.split("").map((char, index) => (
                        <CharWrapper key={index + introPrefix.length}
                                     element={props => <StyledSpan {...props} char={char} color="pink" jump/>}>
                            {char}
                        </CharWrapper>
                    ))}
                    {introSuffix.split("").map((char, index) => (
                        <CharWrapper key={index + introPrefix.length + introHighlight.length}
                                     element={props => <StyledSpan {...props} char={char} color="black"/>}>
                            {char}
                        </CharWrapper>
                    ))}
                </WindupChildren>
                {introComplete && (
                    <WindupChildren>
                        <br/>
                        {byLinePrefix.split("").map((char, index) => (
                            <CharWrapper key={index}
                                         element={props => <StyledSpan {...props} char={char} color="black"/>}>
                                {char}
                            </CharWrapper>
                        ))}
                        {names1.split("").map((char, index) => (
                            <CharWrapper key={index + byLinePrefix.length}
                                         element={props => <StyledSpan {...props} char={char} color="pink"/>}>
                                {char}
                            </CharWrapper>
                        ))}
                        {conjunction.split("").map((char, index) => (
                            <CharWrapper key={index + byLinePrefix.length + names1.length}
                                         element={props => <StyledSpan {...props} char={char} color="black"/>}>
                                {char}
                            </CharWrapper>
                        ))}
                        {names2.split("").map((char, index) => (
                            <CharWrapper key={index + byLinePrefix.length + names1.length + conjunction.length}
                                         element={props => <StyledSpan {...props} char={char} color="pink"/>}>
                                {char}
                            </CharWrapper>
                        ))}
                        <img src={lightbulb} alt="Lightbulb" style={{ display: "block", margin: "15px auto 0", width: "75px", height: "75px" }} />
                    </WindupChildren>
                )}
            </StyledContainer>
        </>
    );
}


export default TextAnimation;
