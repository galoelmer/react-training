import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="ui container">
      <div className="ui grid padded">
        <div className="ui sixteen wide column">
          <div className="ui segment items">
            <div className="item">
              <div className="content">
  <h1 className="header">Cute Dog - {id}</h1>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti, sapiente dignissimos fuga blanditiis odio iusto
                    fugit? Quisquam maiores ad numquam enim aliquam corporis qui
                    beatae! Nisi eligendi temporibus provident voluptas cum
                    error, itaque est quasi repudiandae quod ipsum optio ad
                    asperiores quia possimus consectetur deleniti inventore
                    amet.
                  </p>
                </div>
                <div className="ui divider"></div>
                <div className="extra">
                  Posted By EC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
