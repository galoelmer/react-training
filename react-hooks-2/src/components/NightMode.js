import React, { useContext } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Context } from './containers/WbnPlayer';

const NightMode = () => {
  const { nightMode, setNightMode } = useContext(Context);
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={nightMode}
            onChange={() => setNightMode(!nightMode)}
            name="nightMode"
            color="primary"
          />
        }
        label="Night Mode"
      />
    </FormGroup>
  );
};

export default NightMode;
