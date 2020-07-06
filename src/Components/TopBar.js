import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import airtelLogo from './FeatureFolder/assets/airtelLogo.png'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from "react-redux";
import {TopBarActionTypes} from "../Action-Types/TopBar.ActionTypes"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  square :{
    width:120,
    height:40
  },
    formControl: {
      position:"relative",
      top:-10,
      left:-30,
    margin: theme.spacing(1),
    width: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));

function ButtonAppBar(props) {
  const classes = useStyles();
    const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    /*
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    */
    props.dispatch({type:TopBarActionTypes.SELECT_BOT,botName:event.target.value});
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar style={{backgroundColor:"#0063cc"}}>
          <img src ={airtelLogo} className={classes.square} />
          <Typography variant="h6" className={classes.title} style={{color:"white"}}>
            BOT Manager
          </Typography>

      <FormControl className={classes.formControl}>
        <InputLabel style={{color:"white",}}>Select Bot Name</InputLabel>
        <Select
          native
          value={state.botName}
          onChange={handleChange}
          inputProps={{
            name: 'botName',
            id: 'botName-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          {
            props.botList.map(bot=>(
              <option value={bot}>{bot}</option>
              ))
          }
          
          
        </Select>
      </FormControl>
      {console.log(props.botName)}
          <Button color="inherit">LogOut</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function mapStatetoProps(state){
  return{
    botName:state.topBar.botName,
    botList:state.topBar.botList
  };
}

export default connect(mapStatetoProps)(ButtonAppBar);