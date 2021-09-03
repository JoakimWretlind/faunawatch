import React from 'react'
import {
    AboutSection,
    AboutContainer,
    AboutContent,
    InfoCard,
    TextSection,
    QuoteIcon,
    QuoteIconBottom,
    AboutText,
    ImgContainer,
    Img,
    PersonInfo,
    MapImgContainer,
    MapImg
} from './About.styling';
import { MainHeader, Underline } from '../../sharedComponents';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Tim from '../../assets/images/Tim.jpg';
import Assumpta from '../../assets/images/Assumpta.jpg';
import Map from '../../assets/images/WorldMap.jpg';


const About = () => {
    return (
        <>
            <AboutSection>
                <AboutContainer>
                    <MainHeader>about</MainHeader>
                    <Underline />
                    <AboutContent>
                        <InfoCard>
                            <TextSection>
                                <QuoteIcon>
                                    <ImQuotesLeft />
                                </QuoteIcon>
                                <AboutText>
                                    We use the power of education and research to save endangered species.
                                </AboutText>
                            </TextSection>
                            <ImgContainer>
                                <Img src={Tim} alt="Tim" />
                            </ImgContainer>
                            <PersonInfo>Tim Huijsmans<br />President Faunawatch</PersonInfo>
                            <QuoteIconBottom>
                                <ImQuotesRight />
                            </QuoteIconBottom>
                        </InfoCard>
                        <InfoCard>
                            <MapImgContainer>
                                <MapImg src={Map} alt="map" />
                            </MapImgContainer>
                        </InfoCard>
                        <InfoCard>
                            <TextSection>
                                <QuoteIcon>
                                    <ImQuotesLeft />
                                </QuoteIcon>
                                <AboutText>
                                    Protecting wildlife and solving human-wildlife conflicts together with Faunawatch is very important for our communities.
                                </AboutText>
                            </TextSection>
                            <ImgContainer>
                                <Img src={Assumpta} alt="Assumpta" />
                            </ImgContainer>
                            <PersonInfo>Assumpta Namuwonge<br />Representative Uganda</PersonInfo>
                            <QuoteIconBottom>
                                <ImQuotesRight />
                            </QuoteIconBottom>
                        </InfoCard>
                    </AboutContent>
                </AboutContainer>
            </AboutSection>
        </>
    )
}

export default About
