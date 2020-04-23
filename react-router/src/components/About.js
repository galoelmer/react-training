import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div>
      <div className="container">
        <h4 className="center">About</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas incidunt
          ad commodi ex, maiores quam magni adipisci reprehenderit quia labore
          cum voluptatum. Blanditiis culpa iusto cumque esse quidem aperiam
          placeat!
        </p>
      </div>
    </div>
  );
};

export default Rainbow(About);
