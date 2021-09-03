import React from 'react';
import ProjectCard from './ProjectCard';
import {
    ProjectSection,
    ProjectContainer
} from './Projects.styling';
import { MainHeader, Underline } from '../../sharedComponents';

const Projects = () => {
    return (
        <>
            <ProjectSection>
                <ProjectContainer>
                    <MainHeader>projects</MainHeader>
                    <Underline />
                    <ProjectCard />
                </ProjectContainer>
            </ProjectSection>
        </>
    )
}

export default Projects
