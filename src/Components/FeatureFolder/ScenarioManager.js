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
import { connect } from "react-redux";
import {ScenarioActionTypes} from "../../Action-Types/Scenario.ActionTypes"
import * as ScenarioActions from "../../Actions/Scenario.action"

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
      float: "left",
      height: 30,
      alignItems: "left",
      position:"absolute",
      top: 50,
      left: 320,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    heading :{
      position:"absolute",
      top: -10,
      left: 500,
      fontFamily: "Segoe UI"
    },
    line :{
      position:"relative",
      top: 50,
      width: 900,
      left: 450,
      height: 2,
      backgroundColor:"black"
    },
    heading1 :{
      position:"absolute",
      top: 750,
      left: 670,
      fontFamily: "Segoe UI"
    },
    line1 :{
      position:"relative",
      top: 70,
      width: 900,
      left: 870,
      height: 2,
      backgroundColor:"black"
    },
    field1 :{
      position:"relative",
      top: 1880,
      left: 710,
      
    },
  }));
 

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
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
    height: 20,
    padding: '15px 0px',
      },
  
  
})(TextField);

  const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      position: 'relative',
      top: 20,
      left: 1050,
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

    /*const handleChange = (event,action) => {
      //setAge(event.target.value);
      handleInput(action,event.target.value);
    };
    */

    const handleInput = (action,age) => {
      switch(action){
        case "EDITSCENARIO_IN" :  
          props.dispatch(ScenarioActions.inputEditSC(age));
          break;

        case "SC_NAME_IN" :
          props.dispatch(ScenarioActions.inputSCName(age));
          break;          
        
        case "SC_ID_IN" :
          props.dispatch(ScenarioActions.inputSCId(age));
        break;

        case "SC_STRAT_IN" :
          props.dispatch(ScenarioActions.inputSCStrat(age));
        break;
        
        case "IS_MSISDN_IN" :
          props.dispatch(ScenarioActions.inputMSISDN(age));
        break;

        case "IS_FB_IN" :
          props.dispatch(ScenarioActions.inputFB(age));
          break;
        
        case "SC_RESP_IN" :
          props.dispatch(ScenarioActions.inputResp(age));
          break;
        
        case "SC_REMOVE" :
          props.dispatch(ScenarioActions.inputRemovalScenario(age));
          break;

        case "SC_LOB_IN" :
          props.dispatch(ScenarioActions.inputSCLOB(age));          
          break;
         
      }
    };

    async function saveScenario(){
              let res = await fetch('http://10.5.205.104:8080/trainer/saveScenario', {
                method: 'post',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    scenario:{
                      scenarioId:props.scenarioId,
                      scenarioName:props.scenarioName,
                      scenarioStrategy:props.scenarioStrat,
                      scenarioLob:props.scenarioLOB,
                      scenarioResponse:props.scenarioResp,
                      msisdnRequired:props.reqMSISDN,
                      feedbackRequired:props.reqFeedback
                    }
                })
            });

            let result = await res.json();

            if(result.status==200)
              console.log("correct");
            else
              console.log("wrong");    

    }

    async function loadScenario(){

    }

    async function remScenario(){
      let res = await fetch('http://10.5.205.104:8080/removeScenario', {
                method: 'get',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    scenarioName:props.scenarioEditted
                })
            });

        let result =await res.json();      
      
    }
    

    return (
        <div className="forms">
        <Typography variant="h3" className={classes.heading}>
              Manage Scenario
        </Typography>
    
        <Divider className={classes.line}/>
        <FormControl variant="outlined" className={classes.formControl}>
            <div className= "ManageBot">
            
            <InputLabel id="demo-customized-select-label"></InputLabel><div className= "field"> Select Scenario to Edit:</div> 
            <div className="block"> 
                <Select style={{width:200}}
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={props.scenarioEditted}
                onChange={(e)=>handleInput("EDITSCENARIO_IN",e.target.value)}
                >
                          <MenuItem value="DEFAULT">DEFAULT</MenuItem>
                          <MenuItem value="EXTERNAL">EXTERNAL</MenuItem>
                          <MenuItem value="NATIVE">NATIVE</MenuItem>
                          <MenuItem value="GRAPH">GRAPH</MenuItem>
                </Select>
                </div>
            </div>

            <form className={classes.root} noValidate autoComplete="off">
                <div className= "field">  
                <TextField id="outlined-basic" label="" variant="outlined" value={props.scenarioName} 
                onChange={(e)=>handleInput("SC_NAME_IN",e.target.value)}
                />
                
                <p>Enter Scenario Name:</p>
                </div>
                
            </form>
            <form className={classes.root} noValidate autoComplete="off">
                <div className= "field"> 
                <div className="block"><CSSTextField id="outlined-basic" label="" variant="outlined" value={props.scenarioId} 
                onChange={(e)=>handleInput("SC_ID_IN",e.target.value)}
                /> </div>
                <p>Enter Scenario ID: </p>
                </div>
            </form>
            
            <InputLabel id="demo-customized-select-label">   </InputLabel><div className= "field"> Select Scenario Strategy: 
            <div className="block"> 
                <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={props.scenarioStrat}
                onChange={(e)=>handleInput("SC_STRAT_IN",e.target.value)}
                input={<BootstrapInput />}
              >
                          <MenuItem value="DTScenario">
                          DTScenario
                          </MenuItem>
                          <MenuItem value="FAQSenario">FAQScenario</MenuItem>
                          <MenuItem value="SwitchScenario">SwitchScenario</MenuItem>
                      </Select>
                </div>
              </div>
            
              <InputLabel id="demo-customized-select-label">   </InputLabel><div className= "field"> Select Scenario LOB: 
                <div className="block"> 
                    <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={props.scenarioLOB}
                    onChange={(e)=>handleInput("SC_LOB_IN",e.target.value)}
                    input={<BootstrapInput />}
                  >
                              <MenuItem value="PostPaid">PostPaid</MenuItem>
                              <MenuItem value="PrePaid">PrePaid</MenuItem>
                              <MenuItem value="DTH">DTH</MenuItem>
                              <MenuItem value="Telemedia">Telemedia</MenuItem>
                              <MenuItem value="HR">HR</MenuItem>
                              <MenuItem value="PaymentBanks">PaymentsBank</MenuItem>
                          </Select>
                    </div>
                  </div>
                  <InputLabel id="demo-customized-select-label">   <div className= "field"> MSISDN Required:
                  <div className="block"> 
                      <Select
                      labelId="demo-customized-select-label"
                      id="demo-customized-select"
                      value={props.reqMSISDN}
                      onChange={(e)=>handleInput("IS_MSISDN_IN",e.target.value)}
                      input={<BootstrapInput />}
                    >
                                <MenuItem value="True">
                          True
                      </MenuItem>
                      <MenuItem value="False">False</MenuItem>
                            </Select>
                      </div>
                    </div>
                    </InputLabel>
                    <InputLabel id="demo-customized-select-label">   </InputLabel><div className= "field"> Feedback Required:
                      <div className="block"> 
                            <Select
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            value={props.reqFeedback}
                            onChange={(e)=>handleInput("IS_FB_IN",e.target.value)}
                            input={<BootstrapInput />}
                          >
                                      <MenuItem value="True">
                                True
                            </MenuItem>
                            <MenuItem value="False">False</MenuItem>
                                  </Select>
                            </div>
                        </div>
            

            

            <form className={classes.root} noValidate autoComplete="off">
                <div className= "field">  
                    <div className="block"><CSSTextField id="outlined-basic" label="" variant="outlined" value={props.scenarioResp}                                               
                     onChange={(e)=>handleInput("SC_RESP_IN",e.target.value)}
                    /> </div>
                    <p>Enter Scenario Response:</p>
                </div>
            </form> 
            

            

            
            <br />
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} onClick={saveScenario}>
                Save
            </BootstrapButton>

            &emsp; &emsp;
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} onClick={loadScenario}>
                Load
            </BootstrapButton>
          
            <br />
            <div className= "DeleteBot">
            <Typography variant="h3" className={classes.heading1} >
              Remove Scenario
            </Typography>


        
            <Divider className={classes.line1}/>
            <br /> <br /> <br /> <br /> <br />
            <InputLabel id="demo-simple-select-outlined-label">   </InputLabel>
            <div className= "field1">  
                <div className="block">
                    <Select 
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={props.scenarioRemove}
                    onChange={(e)=>handleInput("SC_REMOVE",e.target.value)}
                    label=""
                    >
                    <MenuItem value="True">
                        True
                    </MenuItem>
                    <MenuItem value="False">False</MenuItem>
                    </Select>
                </div>
                Select Scenario to Delete: 
            </div>
            <br/>
            <br />
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} onClick={remScenario}>
                Delete Scenario
            </BootstrapButton>

            </div>
          </FormControl>

            


        </div>
    );
  }


  function mapStatetoProps(state){
    return{
      scenarioEditted:state.scenario.scenarioEditted,
      scenarioName:state.scenario.scenarioName,
      scenarioId:state.scenario.scenarioId,
      scenarioStrat:state.scenario.scenarioStrat,
      scenarioLOB:state.scenario.scenarioLOB,
      reqMSISDN:state.scenario.reqMSISDN,
      reqFeedback:state.scenario.reqFeedback,
      scenarioResp:state.scenario.scenarioResp,
      scenarioRemove:state.scenario.scenarioRemove
    };
  }
  
  export default connect(mapStatetoProps)(SimpleSelect)

