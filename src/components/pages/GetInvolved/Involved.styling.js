import styled from 'styled-components';

export const InvolvedSection = styled.section`    
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InvolvedContainer = styled.div`
    margin-top: 2rem;
    height: 100%;
    width: 100%;
    max-width: 116rem;
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CardContainer = styled.div`
    height: 50vh;
    width: 100%;
    margin: 5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SingleCard = styled.div`
    overflow: hidden;
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 .1rem .6rem rgba(0,0,0,.05);
    padding-bottom: 3rem;
    border-radius: .4rem;
`;

export const ImageWrapper = styled.div`   
    height: 26vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardImg = styled.img`
    height: 100%;
    object-fit: cover;
`;
