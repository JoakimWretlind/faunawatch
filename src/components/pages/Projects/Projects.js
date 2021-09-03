import React from 'react';
import ProjectCard from './ProjectCard';
import {
    ProjectSection,
    ProjectContainer
} from './Projects.styling';
import { MainHeader, Underline, BigBtn } from '../../sharedComponents';

const Projects = () => {
    return (
        <>
            <ProjectSection>
                <ProjectContainer>
                    <MainHeader>projects</MainHeader>
                    <Underline />
                    <ProjectCard />
                    <BigBtn className="lastOnSection">More projects</BigBtn>
                </ProjectContainer>
            </ProjectSection>
        </>
    )
}

export default Projects
