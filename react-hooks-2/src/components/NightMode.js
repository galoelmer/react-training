import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { ThemeProvider } from '@material-ui/core';

const NightMode = (props) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={props.theme.nightMode}
          onChange={() => props.theme.setNightMode(!props.theme.nightMode)}
          name="nightMode"
          color="primary"
        />
      }
      label="Night Mode"
    />
  );
};

export default NightMode;
