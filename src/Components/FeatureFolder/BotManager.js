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
import { BotManagerActionType } from "../../Action-Types/bot-manager.actiontype";
import { connect } from "react-redux";
import * as BotManagerActions from "../../Actions/bot-manager.action"
import IconButton from '@material-ui/core/IconButton';
import * as TopBarActions from "../../Actions/TopBar.action"
import { TopBarActionTypes } from "../../Action-Types/TopBar.ActionTypes";



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
      float: "left",
      height: 30,
      alignItems: "left",
      position:"absolute",
      top: 50,
      //left: -380,
      left:1000
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    heading :{
      position:"absolute",
      top: -10,
      left: -200,
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
      top: 690,
      left: 20,
      fontFamily: "Segoe UI"
    },
    line1 :{
      position:"relative",
      top: 120,
      width: 900,
      left: 180,
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
    width: 205,
    padding: '10px 0px',
    position: 'relative',
    top: -70,
    left: 1,
      },

  
  
})(TextField);

  const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      position: 'relative',
      top: 20,
      left: 330,
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
  
   function NativeSelects(props) {
    const classes = useStyles();
    
  
    const handleChange = (action,value) => {
      switch(action){
        case "SET_BOT_NAME":
      props.dispatch(BotManagerActions.inputBotName(value));
        break;

        case "SET_BOT_TOKEN":
      props.dispatch(BotManagerActions.inputBotToken(value));
        break;
      
        case "SET_BOT_STRATEGY":
      props.dispatch(BotManagerActions.inputBotStrategy(value));
        break;

        case "SET_BOT_ALGORITHM":
      props.dispatch(BotManagerActions.inputBotAlgorithm(value));
        break;

        case "SET_BOT_MSISDN" :
      props.dispatch(BotManagerActions.inputBotMsisdn(value));
        break;

        case "SET_BOT_SCORE":
      props.dispatch(BotManagerActions.inputBotScore(value));
        break;
    }
    };

    

    async function createBot(){
      let res = await fetch('http://10.5.205.104:8080/trainer/createNewBot', {
                method: 'post',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    profile:{
                        botName:props.botName,
                        botAccessToken:props.botToken,
                        algorithm:props.botAlgorithm,
                        classifyStrategy:props.botStrategy,
                        logMsisdn:props.botMsisdn,
                        botScore:props.botScore
                    }
                })
            });

            let result =await  res.json();

            if(result.resultMessage=="Saved")
              props.dispatch(TopBarActions.addBot(props.botName));

            console.log(result.resultMessage);
    }

    async function deleteBot(){
      let res = await fetch('http://10.5.205.104:8080/trainer/deleteBot/{props.selectedBot}', {
                method: 'post',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    
                })
            });

            let result =await  res.json();

            if(result.resultMessage=="Saved")
              props.dispatch(TopBarActions.removeBot(props.selectedBot));

            console.log(result.resultMessage);  
    }

    async function loadBot(){
      let res = await fetch('http://10.5.205.104:8080/trainer/createNewBot', {
                method: 'post',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    profile:{
                        botName:props.botName,
                        botAccessToken:props.botToken,
                        algorithm:props.botAlgorithm,
                        classifyStrategy:props.botStrategy,
                        logMsisdn:props.botMsisdn,
                        botScore:props.botScore
                    }
                })
            });

            let result =await  res.json();

            console.log(result.resultMessage);  
    }



    return (
        <div className="forms">
        <Typography variant="h3" className={classes.heading} style={{left:1000,top:1000}}>
              Manage Bot
            </Typography>
    
            <Divider className={classes.line}/>
        
            {props.dispatch(TopBarActions.addBot("myBot"))}
        
        <FormControl variant="outlined" className={classes.formControl}>
            <div className= "ManageBot">
      
                <div className= "field">  
                
                <p> <div className="field1" style={{ position: "relative", left:2, top:-10 }} >Enter Bot Name:  </div> </p>
                <div className="block"><CSSTextField style={{height: 30, position: "relative", left:2, top:-60}}
                    id="filled-secondary"
                    variant="filled"
                    color="secondary"
                    value={props.botName}
                    onChange={(e)=>handleChange("SET_BOT_NAME",e.target.value)}
                  /> </div>
                
                
                </div>
                
            <form className={classes.root} noValidate autoComplete="off">
                <div className= "field"> 
                
                <p> <div className="field1" style={{ position: "relative", left:5, top:-10}}> Enter Bot Access Token:  </div> </p>
                <div className="block"> <CSSTextField style={{height: 30, position: "relative", left:2, top:-50}}
                    id="filled-secondary"
                    variant="filled"
                    color="secondary"
                    value={props.botToken}
                    onChange={(e)=>handleChange("SET_BOT_TOKEN",e.target.value)}
                  />
                   </div>
                </div>
            </form>
            
            <p><div className="field1" style={{ position: "relative", left:25, top:20}}> Enter Bot Strategy: </div></p>
        <InputLabel htmlFor="filled-age-native-simple"></InputLabel>
            <Select style={{width:205, height: 50, position: "relative", left:327, top:-5}}
              native
              value={props.botStrategy}
                    onChange={(e)=>handleChange("SET_BOT_STRATEGY",e.target.value)}
              inputProps={{
                name: 'strategy',
                id: 'filled-strategy-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              <option value="Default">Default</option>
              <option value="External">External</option>
              <option value="Native">Native</option>
              <option value="Graph">Graph</option>
            </Select>
              </div>
            
              <p><div className= "field1" style={{ position: "relative", left:27, top:20}}> Enter Bot Algorithm Location: 
              </div></p>
              <div className="block"> 

              <InputLabel htmlFor="filled-age-native-simple"></InputLabel>
              <Select style={{width:205, height: 50, position: "relative", left:247, top:-5}}
                native
                inputProps={{
                  name: 'lob',
                  id: 'filled-lob-native-simple',
                }}
                value={props.botAlgorithm}
                    onChange={(e)=>handleChange("SET_BOT_ALGORITHM",e.target.value)}
              >
                <option aria-label="None" value="" />
                <option value="PostPaid">PostPaid</option>
                <option value="PrePaid">PrePaid</option>
                <option value="DTH">DTH</option>
                <option value="Telemedia">Telemedia</option>
                <option value="HR">HR</option>
                <option value="PaymentsBank">PaymentsBank</option>
              </Select>
              </div>
              <p> <div className="field1" style={{ position: "relative", left:30, top:20}}> Bot MSISDN Log:  </div> </p>
              <div className="block"> 
                    <InputLabel htmlFor="filled-age-native-simple"></InputLabel>
                    <Select style={{width:205, height: 50, position: "relative", left:250, top:-10}}
                      native
                      inputProps={{
                        name: 'msisdn',
                        id: 'filled-msisdn-native-simple',
                      }}
                      value={props.botMsisdn}
                    onChange={(e)=>handleChange("SET_BOT_MSISDN",e.target.value)}
                    >
                      <option aria-label="None" value="" />
                      <option value="True">True</option>
                      <option value="False">False</option>
                    </Select>
                    

                      <p> <div className = "field1" style={{ position: "relative", left:-130, top:20}} >Enter Bot Classify Score: </div></p>
                        <InputLabel id="demo-customized-select-label">   </InputLabel><div className= "field"> 
                        
                      <div className="block"> 
                      
                          <CSSTextField style={{width:205, height: 50, position: "relative", left:5, top:-40}}
                          id="filled-secondary"
                          variant="filled"
                          color="secondary"
                          value={props.botScore}
                    onChange={(e)=>handleChange("SET_BOT_SCORE",e.target.value)}
                        />
                                  </div>

                              
              </div>


            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:520, top:30}}
            onClick={createBot}>
                Save
            </BootstrapButton>
            &emsp; &emsp;
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:520, top:30}}>
                Load
            </BootstrapButton>
            <br />
            <div className= "DeleteBot">
            <Typography variant="h3" className={classes.heading1}>
              Delete Bot
            </Typography>
        
            <Divider className={classes.line1}/>
            <br /> <br /> <br /> <br /> <br />
            <div className= "field1">  
            
                <br /> <br />
                

            </div>
            <br/>
            <br />
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:350, top:20}}
            onClick={deleteBot}>
                Delete Bot
            </BootstrapButton>
            </div>
            </div>
      </FormControl>
        </div>
    );
  }

  function mapStatetoProps(state){
    return{
      botName:state.botManager.botName,
      botToken:state.botManager.botToken,
      botStrategy:state.botManager.botStrategy,
      botAlgorithm:state.botManager.botAlgorithm,
      botMsisdn:state.botManager.botMsisdn,
      botScore:state.botManager.botScore,
      selectedBot:state.topBar.botName,
      botList:state.topBar.botList
    };
  }

  export default connect(mapStatetoProps)(NativeSelect);