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
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Airtel from './assets/airtelLogo.png';
//import User from './User.png';
import { connect } from "react-redux";
import { LoginActionType } from "../../Action-Types/login.actiontype";
import * as Login from "../../Actions/login.action"

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
      float: "left",
      height: 30,
      alignItems: "left",
      position:"absolute",
      top: 50,
      left: -380,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    heading :{
      position:"absolute",
      top: 320,
      left: 680,
      fontFamily: "Segoe UI"
    },
    line :{
      position:"relative",
      top: 50,
      width: 900,
      left: -250,
      height: 2,
      backgroundColor:"black"
    },
    heading1 :{
      position:"absolute",
      top: 950,
      left: 150,
      fontFamily: "Segoe UI"
    },
    line1 :{
      position:"relative",
      top: 110,
      width: 900,
      left: 150,
      height: 2,
      backgroundColor:"black"
    },
    field1 :{
      position:"relative",
      top: 1880,
      left: 10,
      
    },
  }));
 

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
      position: 'relative',
      top: 45,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 170,
    height: 30,
    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 6,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
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
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const CSSTextField = withStyles({
  root: {
    width: 285,
    height: 1,
    padding: '15px 3px',
    position: 'relative',
    top: 30,
    left: 615,
    fontSize: 20,
      },
  
  
})(TextField);

  const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 18,
      position: 'relative',
      top: 80,
      left: 20,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      align: 'center',
      backgroundColor: '#0367fc',
      borderColor: '#0367fc',
      
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

  function InputTextField(props) {
    const classes = useStyles();
    const handleChange = (action,input) => {
      switch(action){
        case "USER_IN" :  
          props.dispatch(Login.inputUser(input));
          break;
  
        case "PASSWORD_IN" :
          props.dispatch(Login.inputPassword(input));
          break;          
     
        }
      };
    
      async function doLogin() {
        if (!props.user) {
            return;
        }
        if (!props.password) {
            return;
        }

        /*setState({
            buttonDisabled: true
        })*/


        try{

            let res =  await fetch('http://localhost:8080/authenticate', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: props.user,
                    password: props.password
                })
            });
            //console.log(res);

            let result = await res.json();

            console.log(result);

            if (result && result.success){
                props.dispatch(Login.loggedIn(true)) 
                props.dispatch(Login.setJwt(result.jToken))               
                console.log("Correct");
                
            }
            else{
                props.dispatch(Login.inputUser(""));
                props.dispatch(Login.inputPassword(""));                
                console.log("Wrong");
            }
        }

        catch(e){
            console.log(e);
            //this.resetForm(); 

        }
    }


    return (
        
        
        <div className = "loginForm">
            
            <div className= "User">{/*<img src={User} alt="logo" />*/} </div>
            
            <Typography variant="h4" className={classes.heading}>
BOT MANAGER        </Typography >
                <div className = "inputBoxes">
            

            <CSSTextField
                type='text'
                placeholder='UserName'
                value={props.user}
                onChange={(e)=>handleChange("USER_IN",e.target.value)}
                />
                <br /> <br / >

            <CSSTextField
                type='password'
                placeholder='Password'
                value={props.password}
                onChange={(e)=>handleChange("PASSWORD_IN",e.target.value)}
                />
            </div>
            <div className="check">
                <input type="checkbox"
                    
            /> Remember Me
             
            </div>
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}
            onClick={doLogin}
              >
                Login
            </BootstrapButton>
            
            </div>
        );
    }



function mapStatetoProps(state){
    return{
    user: state.login.user,
    password: state.login.password,
    jwt:state.login.jwt
    };
  }
  
  
  export default connect(mapStatetoProps)(InputTextField);
