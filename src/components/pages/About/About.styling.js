import styled from 'styled-components';

export const AboutSection = styled.section`
    height: 75vh;
  //  height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;
`;

export const AboutContainer = styled.div`    
    height: 100%;
    width: 100%;
    max-width: 116rem;
    margin-top: 5rem;
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
`;

export const AboutContent = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;  
`;

export const InfoCard = styled.div`
    position: relative;
    margin-top: 5rem;
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    padding: 2rem;     
    &:nth-child(odd){
        background: #FDF9F0;
    }
    &:nth-child(even){
        width: 40%;
    }
`;

export const TextSection = styled.div`
    display: flex;
`;

export const QuoteIcon = styled.div`
    width: min-content;
    height: min-content;
    font-size: 1.8rem;
    color: #333;
`;

export const QuoteIconBottom = styled.div`
    position: absolute;
    bottom: 3rem;
    right: 3rem;
    width: min-content;
    height: min-content;
    font-size: 1.8rem;
    color: #333;
`;

export const AboutText = styled.h5`
    font-size: clamp(2rem, 6vw, 2.6rem);
    margin-top: 1rem;
    margin-left: .5rem;
`;

export const ImgContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX( -50%);
    overflow: hidden;
    height: 14rem;
    width: 14rem;
    border-radius: 100%;
    border: .5rem solid #333;
    display: flex;
    justify-content: center;
    align-items: center;  
`;

export const Img = styled.img`
    height: 100%;  
`;

export const PersonInfo = styled.p`
    position: absolute;
    top: 83%;
    font-size: 1.2rem;
    text-align: center;
`;

export const MapImgContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const MapImg = styled.img`
    width: 100%;
    object-fit: contain;
`;