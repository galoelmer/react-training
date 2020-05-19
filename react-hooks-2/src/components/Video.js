import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { Context } from './containers/WbnPlayer';

const Video = () => {
  const { state } = useContext(Context);
  return (
    <div>
      <ReactPlayer
        width="100%"
        height="100%"
        // style={{ position: 'absolute', top: '0' }}
        playing={state.autoplay}
        controls={true}
        url={state.activeVideo}
        // onEnded={}
        // onProgress={}
      />
    </div>
  );
};

export default Video;
