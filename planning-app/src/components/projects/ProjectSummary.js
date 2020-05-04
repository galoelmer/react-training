import React from 'react';

const ProjectSummary = ({ project }) => {
  return (
    <div className="item">
      <div className="ui card">
        <div className="content">
          <div className="header">{project.title}</div>
          <div className="meta">2 days ago</div>
          <div className="description">
            <p>{project.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
