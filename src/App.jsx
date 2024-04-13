import React, { useEffect, useState } from 'react';
import { useWindupString } from 'windups';
import styled, { keyframes } from 'styled-components';
import barbie1 from './assets/barbie1.jpg';
import barbie2 from './assets/barbie3.jpg';
import barbie3 from './assets/barbie2.jpg';
import BarbieLogo from './assets/BarbieLogo.png';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    background-color: #ffccf9;
    gap: 40px;
    animation: ${fadeIn} 2s ease;
    padding: 40px;
    box-sizing: border-box;
`;

const TextBlock = styled.div`
    padding: 10px;
    border: 3px dashed #ff69b4;
    border-radius: 20px;
    font-family: 'Brush Script MT', cursive;
    font-size: 36px;
    color: #ff69b4;
    text-align: center;
    box-shadow: 0px 6px 12px rgba(255, 105, 180, 0.6);
    background-color: rgba(255, 255, 255, 0.8);
`;

const Emphasized = styled.em`
    font-style: normal;
    color: #ff1493;
    font-weight: bold;
    text-decoration: underline;
`;

const Image = styled.img`
    width: 100%;
    max-width: 300px;
    height: 200px;
    border-radius: 20px;
    box-shadow: 0px 6px 12px rgba(255, 105, 180, 0.6);
    margin: 0 10px;
    object-fit: cover;
`;

const Logo = styled.img`
    width: 50%;
    max-width: 200px;
    height: 125px;
    object-fit: cover;
`;

const ImageRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
`;

export default function App() {
    const [showFirstText, setShowFirstText] = useState(false);
    const [showSecondText, setShowSecondText] = useState(false);
    const [showThirdText, setShowThirdText] = useState(false);

    const [firstText] = useWindupString("Welcome to the Barbie World!", { pace: (char) => (char === " " ? 500 : 100) });
    const [secondText] = useWindupString("I'm a Barbie girl in a Barbie world!", { pace: (char) => (char === " " ? 500 : 100) });
    const [thirdText] = useWindupString("Explore the world of Barbie, where imagination knows no bounds!", { pace: (char) => (char === " " ? 500 : 100) });

    useEffect(() => {
        const timer1 = setTimeout(() => setShowFirstText(true), 500);
        const timer2 = setTimeout(() => setShowSecondText(true), 2000);
        const timer3 = setTimeout(() => setShowThirdText(true), 3500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <Container>
            <Logo src={BarbieLogo} alt="Barbie Logo" />

            {showFirstText && (
                <TextBlock>
                    {firstText}
                </TextBlock>
            )}
            {showSecondText && (
                <TextBlock>
                    {secondText}
                </TextBlock>
            )}
            <ImageRow>
                <Image src={barbie1} alt="Barbie 1" />
                <Image src={barbie3} alt="Barbie 3" />
                <Image src={barbie2} alt="Barbie 2" />
            </ImageRow>
            {showThirdText && (
                <TextBlock>
                    {thirdText}
                </TextBlock>
            )}
        </Container>
    );
}
