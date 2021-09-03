import styled from 'styled-components';

export const Btn = styled.span`
    background: orange;
    padding: .6rem 1.2rem;
    text-transform: uppercase;
    border-radius: .4rem;
`;

export const BigBtn = styled.span`
    background: orange;
    padding: .8rem 1.6rem .6rem;
    text-transform: uppercase;
    border-radius: .3rem;
    font-size: clamp(1.4rem, 4vw, 1.6rem);
    color: #f1f1f1;
    letter-spacing: .1rem;
`;

export const MainHeader = styled.h1`
    color: orange;
    margin: 5rem 0 0;
    text-transform: uppercase;
    font-size: clamp(2rem, 6vw, 3rem);
    letter-spacing: .3rem;
`;

export const SecondaryHeader = styled.h2`
    color: orange;
    text-transform: uppercase;
    font-size: clamp(1.8rem, 6vw, 2.6rem);
    letter-spacing: .3rem;
`;

export const Underline = styled.div`
    height: .2rem;
    width: 10%;
    background: orange;
    border: none;
    margin-top: 1rem;
`;

export const TextP = styled.p`
    color: #333;
    font-size: clamp(1.2rem, 4vw, 1.4rem);
    letter-spacing: .1rem;
`;