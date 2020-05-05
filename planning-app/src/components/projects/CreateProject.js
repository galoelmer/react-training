import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push('/');
  };

  render() {
    console.log(this.props);
    return (
      <div className="ui padded three column centered grid">
        <div className="column">
          <h2 className="ui center aligned inverted header">
            <div className="content">Create Project</div>
          </h2>
          <form className="ui form ">
            <div className="ui stacked segment">
              <div className="field">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label>Project Content</label>
                <textarea
                  rows="2"
                  id="content"
                  onChange={this.handleChange}
                ></textarea>
              </div>

              <div
                onClick={this.handleSubmit}
                className="ui fluid large teal submit button"
              >
                Create Project
              </div>
            </div>

            <div className="ui error message"></div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
