import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

export default function ProjectDetails(props) {
  useFirestoreConnect('projects');
  const projects = useSelector((state) => state.firestore.data.projects);
  const auth = useSelector((state) => state.firebase.auth);
  const id = props.match.params.id;
  const project = projects ? projects[id] : null;
  if (!auth.uid) return <Redirect to="/signin" />;
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
                    Posted By {project.authorFirstName} {project.authorLastName} - {moment(project.createdAt.toDate()).calendar()}
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
        <div className="ui segment">
          <div className="ui active inverted dimmer">
            <div className="ui small text loader">Loading project...</div>
          </div>
          <p></p>
        </div>
      </div>
    );
  }
}
