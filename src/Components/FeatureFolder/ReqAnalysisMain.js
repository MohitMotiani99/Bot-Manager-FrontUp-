import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '75ch',
      height: 1000
    },
  },

  box1 :{
    height:100,
    position :"absolute",
    top: 150,
    left :400
  },

  box2 :{
   height:100,
    position :"absolute",
    top: 450,
    left :400 
  },

  Encrypt:{
    position:"absolute",
    top: 402,
    left : 490,
    textTransform: "capitalize"
  },

  Decrypt:{
    position:"absolute",
    top: 402,
    left : 800,
    textTransform: "capitalize"
  },

  heading :{
    position:"absolute",
    top: 80,
    left: 405,
    fontFamily: "Segoe UI"
  },
  line :{
    position:"relative",
    top: -370,
    width: 900,
    left: 405,
    height: 2,
    backgroundColor:"black"
  }
}));

export default function BasicTextFields() {

    

  const classes = useStyles();

  return (
    <div>
    <Typography variant="h3" className={classes.heading}>
      Encrypt/Decrypt Chatbot Data
    </Typography>

    <Divider className={classes.line}/>


    <form className={classes.root} noValidate autoComplete="off">
      <TextField multiline rows={10} className={classes.box1} id="filled-basic" label="Enter Encryted Text" variant="filled" 
      
      />



      <br />



    <TextField multiline rows={10} className={classes.box2} id="outlined-basic" label="Enter Decryted Text" variant="filled" 
    />
    


    </form>
    <Button className={classes.Encrypt} variant="contained" color="secondary">
        Encrypt->Decrypt
    </Button>
    <Button className={classes.Decrypt} variant="contained" color="secondary" >
        Decrypt->Encrypt
    </Button>

    <span style={{position:"relative",top:250}}>&nbsp;&nbsp;</span>
    </div>
  );
}
