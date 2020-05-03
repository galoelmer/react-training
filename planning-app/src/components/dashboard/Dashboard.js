import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard ui container">
        <div className="ui grid padded">
          <div className="ten wide column">
            <ProjectList />
          </div>
          <div className="six wide column">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
