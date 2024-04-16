import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { WindupChildren, CharWrapper, useRewind } from "windups";
import lightbulb from "./assets/lightbulb.png";

const StyledContainer = styled.div`
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    font-size: 36px;
`;

const StyledButton = styled.button`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    color: black;
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
        background-color: black;
        margin: 0;
        padding: 0;
        overflow: hidden;
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

const RewindButton = () => {
    const rewind = useRewind();
    return <StyledButton onClick={rewind}>Rewind</StyledButton>;
};

function TextAnimation() {
    const text = "Welcome to our S&T Presentation!";
    const byLine = "By Anissa, Ana, Ashley, and Gary";

    return (
        <>
            <GlobalStyle />
            <StyledContainer>
                <WindupChildren>
                    {text.split("").map((char, index) => (
                        <CharWrapper key={index} element={props => <StyledSpan {...props} char={char} color={index < 15 ? "white" : "pink"} jump={index >= 15 && index < 33}/>}>
                            {char}
                        </CharWrapper>
                    ))}
                    <br />
                    {byLine.split("").map((char, index) => (
                        <CharWrapper key={index + 100} element={props => <StyledSpan {...props} char={char} color="white" />}>
                            {char}
                        </CharWrapper>
                    ))}
                    <RewindButton />
                </WindupChildren>
                <img src={lightbulb} alt="Lightbulb" style={{ display: "block", margin: "15px auto 0", width: "75px", height: "75px" }} />
            </StyledContainer>
        </>
    );
}

export default TextAnimation;
