import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';

const withLink = (WrappedComponent) => (props) => {
  const { palette } = useTheme();
  const style = {
    textDecoration: 'none',
    color: palette.type === 'dark' ? '#fff' : '#000',
  };

  const newProps = {
    ...props,
    video: {
      ...props.video,
      title: (
        <Link
          style={style}
          to={{ pathname: `/${props.video.id}`, autoplay: true }}
        >
          {props.video.title}
        </Link>
      ),
    },
  };

  return <WrappedComponent {...newProps} />;
};

export default withLink;
