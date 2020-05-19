import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { Context } from './containers/WbnPlayer';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Video = () => {
  const { state } = useContext(Context);
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <div style={{ height: matches ? '400px' : '250px' }}>
      <ReactPlayer
        width="100%"
        height="100%"
        playing={state.autoplay}
        controls={true}
        url={state.activeVideo.video}
        // onEnded={}
        // onProgress={}
      />
    </div>
  );
};

export default Video;
