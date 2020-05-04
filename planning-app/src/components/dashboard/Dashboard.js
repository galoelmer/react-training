import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects } = this.props;
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
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard);
