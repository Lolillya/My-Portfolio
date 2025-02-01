import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroBgAnimation from "../HeroBgAnimation";
import { Link } from "react-router-dom";

const HeroContainer = styled.div`
    background: ${({ theme }) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    @media (max-width: 960px) {
        padding: 66px 16px;
    }
    @media (max-width: 640) {
        padding: 32px 16px;
    }
    z-index: 1;

    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    overflow: hidden;
    padding: 0 30px;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    @media (max-width: 960px) {
        justify-content: center;
        padding: 0 0px;
    }
`;

const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 1100px;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 960px) {
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    @media screen and (max-width: 640px) {
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

const HeroRightContainer = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: end;
    gap: 12px;
    @media screen and(max-width: 960px) {
        order: 1;
        margin-bottom: 80px;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 640px) {
        order: 1;
        margin-bottom: 30px;
    }
`;

const Title = styled.div`
    font-size: 50px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;

    @media screen and (max-width: 960px) {
        text-align: center;
    }

    @media screen and (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;

const TextLoop = styled.div`
    font-size: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 68px;
    gap: 12px;
    display: flex;

    @media screen and (max-width: 960px) {
        text-align: center;
    }

    @media screen and (max-width: 640px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }
`;

const Span = styled.span`
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
`;

const SubTitle = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 95};
    line-height: 32px;
    margin-bottom: 42px;

    @media screen and (max-width: 960px) {
        text-align: center;
    }

    @media screen and (max-width: 640px) {
        font-size: 16px;
        line-height: 32px;
    }
`;

const ResumeButton = styled.button`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;

    width: 15rem;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    border: none;
    z-index: 1;
    cursor: pointer;

    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
    border-radius: 50px;
    font-weight: 600;
    font-size: 20px;

    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow: 20px 20px 60px #1f2634;
        filter: brightness(1);
        cursor: pointer;
    }

    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    }
    color: white;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 50%;
    max-width: 400px;
    max-height: 400px;
    object-fit: cover;
    object-position: center;
    border: 2px solid ${({ theme }) => theme.primary};

    @media screen and (max-width: 768px) {
        max-width: 400px;
        max-height: 280px;
    }

    @media screen and (max-width: 640px) {
        max-width: 280px;
        max-height: 280px;
    }
`;

const TextLoopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LinkContainer = styled.div`
    display: flex;
    gap: 12px;
    width: 100%;
    justify-content: center;
    flex-grow: 1;
`;

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>{/* <HeroBgAnimation /> */}</HeroBg>

                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <TextLoopContainer>
                            <Title>
                                Hi, I am <br />
                                {Bio.name}
                            </Title>
                            <TextLoop>
                                I am a
                                <Span>
                                    <Typewriter
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </Span>
                            </TextLoop>
                        </TextLoopContainer>
                        <SubTitle>{Bio.description}</SubTitle>
                        <LinkContainer>
                            <Link to={Bio.resume}>
                                <ResumeButton>Check Resume</ResumeButton>
                            </Link>
                            <Link to={Bio.linkedin}>
                                <ResumeButton>Linkedin</ResumeButton>
                            </Link>
                        </LinkContainer>
                    </HeroLeftContainer>

                    {/* <HeroRightContainer><Image></Image></HeroRightContainer> */}
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
};

export default HeroSection;
