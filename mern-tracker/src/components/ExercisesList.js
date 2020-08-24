import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TableFooter from '@material-ui/core/TableFooter';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    '& [id="durationTableCell"]' : {
        paddingLeft: 55
    }
  },
  paper: {
    marginTop: 20,
    overflow: 'hidden',
  },
  toolbar: {
    display: 'flex',
    justifyContent: ' center',
    textTransform: 'uppercase',
    backgroundColor: '#7587de',
    color: '#fff',
  },
  deleteButton: {
    color: '#de7587',
    borderColor: '#de7587',
  },
  editButton: {
    color: '#9875de',
    borderColor: '#9875de',
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#94a3e5',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#d3d9f4',
    },
  },
}))(TableRow);

export default function SimpleTable() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/exercises')
      .then((res) => {
        const dbLogs = res.data.map(
          ({ _id, username, description, duration, date }) => ({
            id: _id,
            username,
            description,
            duration,
            date,
          })
        );
        setRows(dbLogs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/exercises/${id}`)
      .then((res) => {
        console.log(res.data);
        setRows(rows.filter((row) => row.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Paper className={classes.paper} elevation={3}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" component="div">
            Logged Exercises
          </Typography>
        </Toolbar>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Username</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Duration (HH:MM)</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length ? (
                rows.map((row) => (
                  <StyledTableRow key={row.id} data-id={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {capitalizeString(row.username)}
                    </StyledTableCell>
                    <StyledTableCell>
                      {capitalizeString(row.description)}
                    </StyledTableCell>
                    <StyledTableCell id='durationTableCell'>
                      {time_convert(row.duration)}
                    </StyledTableCell>
                    <StyledTableCell>
                      {format(new Date(row.date), 'MM/dd/yyyy')}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <ButtonGroup
                        aria-label="small outlined button group"
                        size="small"
                      >
                        <Button
                          className={classes.editButton}
                          component={Link}
                          to={`/edit/${row.id}`}
                        >
                          Edit
                        </Button>
                        <Button
                          className={classes.deleteButton}
                          onClick={() => handleDelete(row.id)}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell align="center" colSpan="5">
                    <Typography
                      variant="body1"
                      component="h5"
                      color="textSecondary"
                    >
                      No Log Entries
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}

function time_convert(num) {
  let hours = 0;
  let minutes = num;
  if (num >= 60) {
    hours = Math.floor(num / 60);
    minutes = num % 60;
  }

  return (
    String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0')
  );
}

function capitalizeString(string) {
  return string[0].toUpperCase().concat(string.substring(1));
}
