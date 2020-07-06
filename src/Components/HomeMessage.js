import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    position: 'absolute',
    top: 300,
    left: 570,
    color :"blue",
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h2" gutterBottom>
        Manage Your Bots Here
      </Typography>
    </div>
  );
}