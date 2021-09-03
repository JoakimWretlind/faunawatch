import React from 'react'
import Card from './Card';
import {
    InvolvedSection,
    InvolvedContainer,
} from './Involved.styling';
import { MainHeader, Underline } from '../../sharedComponents';


const GetInvolved = () => {
    return (
        <>
            <InvolvedSection>
                <InvolvedContainer>
                    <MainHeader>
                        get involved
                    </MainHeader>
                    <Underline />
                    <Card />
                </InvolvedContainer>
            </InvolvedSection>

        </>
    )
}

export default GetInvolved
