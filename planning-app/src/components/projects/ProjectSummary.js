import React from 'react';
import moment from 'moment';

const ProjectSummary = ({ project }) => {
  return (
    <div className="item">
      <div className="ui card">
        <div className="content">
          <div className="header">{project.title}</div>
          <div className="description">
            <p>
              Post by {project.authorFirstName} {project.authorLastName}
            </p>
          </div>
          <div className="meta">{moment(project.createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
