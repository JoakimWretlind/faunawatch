import React from 'react'
import Fox from '../assets/images/Fox.jpg'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import {
    HeroSection,
    HeroImg,
    HeroContentWrapper,
    HeroContent,
    HeroHeaderH2,
    ReadMore,
    HeroP,
    IconWrapper
} from './Hero.styling'
import { MainHeader } from '../sharedComponents';

const Hero = () => {
    return (
        <>
            <HeroSection>
                <HeroImg src={Fox} alt="fox" />
                <HeroContentWrapper>
                    <HeroContent>
                        <MainHeader>
                            protection and wellbeing of animals
                        </MainHeader>
                        <HeroHeaderH2>
                            wild research and planting in the south of the netherlands
                        </HeroHeaderH2>
                        <ReadMore >
                            <HeroP>Read More</HeroP>
                            <IconWrapper>
                                <HiOutlineArrowNarrowRight />
                            </IconWrapper>
                        </ReadMore>
                    </HeroContent>
                </HeroContentWrapper>
            </HeroSection>
        </>
    )
}

export default Hero

