import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
  return (
    <div className="project-list ui list container">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};

export default ProjectList;
