import styled from 'styled-components';

export const HeroSection = styled.div`
    position: relative;
    overflow: hidden;
    height: 40vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;  
`;

export const HeroImg = styled.img`
    width: 100%;
    object-fit: cover;  
`;

export const HeroContentWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(-5deg, rgba(0,0,0,.4), rgba(0,0,0,.6));
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeroContent = styled.div`
    height: 100%;
    width: 100%;
    max-width: 110rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;    
    letter-spacing: .1rem;
`;

export const HeroHeaderH2 = styled.h2`
    color: #f1f1f1;
    margin-top: 3rem;
    text-transform: uppercase;
    font-size: clamp(1.8rem, 6vw, 2.2rem);
    letter-spacing: .1rem;
`;

export const ReadMore = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rem;
`;

export const HeroP = styled.p`
    color: orange;
    font-size: 1.4rem;
    margin-right: 1rem;
`;

export const IconWrapper = styled.div`
    font-size: 2rem;
    color: orange;
    display: flex;
    align-items: center;
`;




