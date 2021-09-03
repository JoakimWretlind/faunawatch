import styled from 'styled-components';

export const ProjectSection = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
`;

export const ProjectContainer = styled.div`
    margin-top: 2rem;
    height: 100%;
    width: 100%;
    max-width: 116rem;
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SingleProject = styled.div`
    height: 50vh;
    width: 100%;
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;  
`;

export const ImageContainer = styled.div`
    overflow: hidden;
    height: 50vh;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProjectImg = styled.img`
    height: 100%;
    object-fit: cover;  
`;

export const InfoContent = styled.div`
    width: 50%;
    height: 100%;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;  
    background: #FDF9F0;
`;

export const ProjectHeader = styled.h2`
    text-transform: uppercase;
    align-items: flex-start;
`;

export const ProjectInfo = styled.p`
    align-items: flex-start;
`;