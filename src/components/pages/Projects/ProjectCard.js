import React from 'react';
import {
    SingleProject,
    ImageContainer,
    ProjectImg,
    InfoContent,
    ProjectHeader,
    ProjectInfo
} from './Projects.styling';
import { BigBtn } from '../../sharedComponents';
import { projectData } from './data';

const ProjectCard = () => {
    return (
        <div>
            {projectData.map(item => {
                return (
                    <SingleProject key={item.id}>
                        <ImageContainer>
                            <ProjectImg src={item.img} alt={item.imginfo} />
                        </ImageContainer>
                        <InfoContent>
                            <ProjectHeader>{item.header}</ProjectHeader>
                            <ProjectInfo>{item.text}</ProjectInfo>
                            <BigBtn>{item.btn}</BigBtn>
                        </InfoContent>
                    </SingleProject>
                )
            })}
        </div>
    )
}

export default ProjectCard
