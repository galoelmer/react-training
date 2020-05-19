import { makeStyles } from '@material-ui/core/styles';

const StyleWbnPlayer = makeStyles((theme) => ({
  root: {
    maxWidth: '1800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    maxHeight: '863px',
    transition: 'all 0.5s ease',
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
}));

export default StyleWbnPlayer;
