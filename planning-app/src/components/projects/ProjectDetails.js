import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <div className="ui container">
        <div className="ui centered grid padded">
          <div className="ui eight wide column">
            <div className="ui segment items">
              <div className="item">
                <div className="content">
                  <h1 className="header">{project.title}</h1>
                  <div className="description">
                    <p>{project.content}</p>
                  </div>
                  <div className="ui divider"></div>
                  <div className="extra">
                    Posted By {project.authorFirstName} {project.authorLastName}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ui container">
        <div class="ui segment">
          <div class="ui active inverted dimmer">
            <div class="ui small text loader">Loading project...</div>
          </div>
          <p></p>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return { project: project };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ['projects'])
)(ProjectDetails);
