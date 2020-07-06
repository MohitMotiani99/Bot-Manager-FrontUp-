import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import NativeSelect from '@material-ui/core/NativeSelect';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {UMIActionTypes} from "../../Action-Types/UMI.ActionTypes"
import { connect } from "react-redux";
/////////////////



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '75ch',
      height: 1000
    },
  },

 
 
  Decrypt:{
    position:"absolute",
    top: -300,
    left : 405,
    textTransform: "capitalize"
  },

  heading :{
    position:"absolute",
    top: 80,
    left: 405,
    fontFamily: "Segoe UI"
  },
  line :{
    position:"absolute",
    top: 150,
    width: 900,
    left: 405,
    height: 2,
    backgroundColor:"black"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    float: "left"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

 
    
  const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      width: 200,
      height: 50,
      position: 'relative',
      right: 180,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      align: 'center',
      backgroundColor: '#0063cc',
      borderColor: '#0063cc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);
   function SimpleSelect(props) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const downloadText =(event)=> {
      let res =  fetch('http://localhost:8090/getObscureText', {
                method: 'get',
                headers: {
                    //'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    botName: props.botName
                })
      });
      console.log(res)
    }

    return (
      <div>
        <Typography variant="h3" className={classes.heading}>
          Unrecognized Mails/Text
        </Typography>
    
        <Divider className={classes.line}/>
        
        <BootstrapButton variant="contained" color="primary" disableRipple className={classes.Decrypt} onChange={downloadText}>
                Download Text
        </BootstrapButton>

    <span style={{position:"relative",top:250}}>&nbsp;&nbsp;</span>
    </div>
    );
  }

  function mapStatetoProps(state){
    return{
      botName:state.topBar.botName
    };
  }

  export default connect(mapStatetoProps)(SimpleSelect);