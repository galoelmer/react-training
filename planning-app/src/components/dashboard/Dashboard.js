import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

export default function Dashboard() {
  useFirestoreConnect([
    {
      collection: 'projects',
      orderBy: ['createdAt', 'desc']
    },
    {
      collection: 'notifications',
      limit: 5,
      orderBy: ['time', 'desc']
    },
  ]);
  const projects = useSelector((state) => state.firestore.ordered.projects);
  const auth = useSelector((state) => state.firebase.auth);
  const notifications = useSelector(
    (state) => state.firestore.ordered.notifications
  );

  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="dashboard ui container">
      <div className="ui grid padded">
        <div className="ten wide column">
          <ProjectList projects={projects} />
        </div>
        <div className="six wide column">
          <Notifications notifications={notifications} />
        </div>
      </div>
    </div>
  );
}
