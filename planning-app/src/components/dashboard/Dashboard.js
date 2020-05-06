import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

export default function Dashboard() {
  useFirestoreConnect('projects');
  const projects = useSelector((state) => state.firestore.ordered.projects);
  return (
    <div className="dashboard ui container">
      <div className="ui grid padded">
        <div className="ten wide column">
          <ProjectList projects={projects} />
        </div>
        <div className="six wide column">
          <Notifications />
        </div>
      </div>
    </div>
  );
}
