import React from 'react';
import { data } from './data';
import {
    CardContainer,
    SingleCard,
    ImageWrapper,
    CardImg
}
    from './Involved.styling';
import { SecondaryHeader, TextP, BigBtn } from '../../sharedComponents';

const Card = () => {
    return (
        < CardContainer>
            {
                data.map((item) => {
                    return (
                        <SingleCard key={item.id}>
                            <ImageWrapper>
                                <CardImg src={item.img} />
                            </ImageWrapper>
                            <SecondaryHeader>
                                {item.title}
                            </SecondaryHeader>
                            <TextP>
                                {item.desc}
                            </TextP>
                            <BigBtn>
                                {item.btn}
                            </BigBtn>
                        </SingleCard>
                    )
                })
            }
        </ CardContainer>
    )
}

export default Card
