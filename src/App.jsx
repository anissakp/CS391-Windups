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
    const [animationKey, setAnimationKey] = useState(0);

    const rewindAnimation = () => {
        setAnimationKey(prevKey => prevKey + 1);  // Change the key to retrigger the animation
    };

    return (
        <>
            <GlobalStyle />
            <StyledContainer>
                <WindupChildren key={animationKey} onFinished={() => console.log("Animation Finished")}>
                    {"Welcome to our S&T Presentation!".split("").map((char, index) => (
                        <CharWrapper key={index} element={props => <StyledSpan {...props} char={char} color={index < 15 ? "black" : "pink"}/>}>
                            {char}
                        </CharWrapper>
                    ))}
                    <br />
                    {"By Anissa, Ana, Ashley, and Gary".split("").map((char, index) => (
                        <CharWrapper key={index + 100} element={props => <StyledSpan {...props} char={char} color="pink" />}>
                            {char}
                        </CharWrapper>
                    ))}
                    <img src={lightbulb} alt="Lightbulb" style={{ display: "block", margin: "15px auto 0", width: "75px", height: "75px" }} />
                </WindupChildren>
                <button onClick={rewindAnimation}>Rewind</button>
            </StyledContainer>
        </>
    );
}

export default TextAnimation;
