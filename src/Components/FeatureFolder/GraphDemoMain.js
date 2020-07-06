import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import GraphDemoForm from './GraphDemoForm'
import GraphDemoForm2 from './GraphDemoForm2'
import { connect } from "react-redux";
import {inputQuerry} from "../../Actions/GraphActions.action"
import {GraphActionTypes} from "../../Action-Types/Graph.ActionTypes"



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    position:"relative",
    top:-350,
    left:-125,
  },
  querry :{
    width: 300
  },

  heading :{
    position:"absolute",
     top: 100,
     left:400,
  },

  heading2 :{
    position:"absolute",
     top: 400,
     left:400,
  },  

  line :{
    position:"relative",
    top: -355,
    width:800,
    left: 400,
    height:2,
    backgroundColor:"black"
  },

  Generate :{
    position:"relative",
    top:-340,
    left: -227,
    textTransform:"capitalize"
  },
  
}));

 function BasicTextFields(props) {
  const classes = useStyles();

  const handleChange=(event)=>{
    props.dispatch({type:GraphActionTypes.QUERRY_IN,querryText:event.target.value});
   //inputQuerry(event.target.value);
  };
  return (
    <div className={classes.rootDiv}>
    
    <Typography variant="h4" className={classes.heading}>
      Intent Generation
    </Typography>
    
    <Divider className={classes.line}/>
    
    <form className={classes.root} noValidate autoComplete="off">
      <TextField className={classes.querry} multiline rows={5} id="filled-basic" label="Enter Your Querry Text" variant="filled" onChange={handleChange}/>
    </form>

    {console.log(props)}


    <Button variant="contained" color="primary" disableElevation className={classes.Generate}>
      Generate
    </Button>

    <Typography variant="h4" className={classes.heading2}>
      Create Scenario to Intent Mapping
    </Typography>

    <Divider style={{top:-230}} className={classes.line}/>

    <GraphDemoForm2 />
    </div>
  );
}

function mapStatetoProps(state){
  return{
  querryText: state.graph.querryText
  };
}

/*
const mapDispatchtoProps={
  inputQuerry
}
*/
export default connect(mapStatetoProps)(BasicTextFields);
