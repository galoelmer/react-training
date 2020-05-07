import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

export default function Dashboard() {
  useFirestoreConnect('projects');
  const projects = useSelector((state) => state.firestore.ordered.projects);
  const auth = useSelector((state) => state.firebase.auth);
  if (!auth.uid) return <Redirect to="/signin" />
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
