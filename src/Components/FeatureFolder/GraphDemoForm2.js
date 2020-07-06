import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import {inputIntents,inputMainNode,inputPrevNode} from "../../Actions/GraphActions.action"
import {GraphActionTypes} from "../../Action-Types/Graph.ActionTypes"


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    position :"relative",
    top:-240,
    left: 150,
    width: 200
  },
  formControl2: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    position :"relative",
    top:-260,
    left: 150,
    width: 200
  },
  formControl3: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    position :"relative",
    top:-280,
    left: 150,
    width: 200
  },
  Choose1 :{
    position:"relative",
    top: -180,
    left: -150
  },
  Choose2 :{
    position:"relative",
    top: -200,
    left: -150
  },
  Choose3 :{
    position:"relative",
    top: -220,
    left: -150
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const mainNodeItems = [
  'Amount',
  'Balance',
  'Bank',
  'Bill',
  'Bye',
  'Cycle',
  'Data',
  'Discount',
  'Freebie',
  'Hi',
  'Mode',
  'Offer',
  'Plan',
  'Signal',
  'SmartByte',
  'TalkTime',
  'Thanks',
  'Time',
  'Unfair'
];
const prevNodeItems=['Apples'];
const names=[];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function MultipleSelect(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  
  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };
  const [mainNode, setMainNode] = React.useState('');
  const [prevNode, setPrevNode] = React.useState('');
  const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

  const handleChange = (event) => {
    setMainNode(event.target.value);
    props.dispatch({type:GraphActionTypes.MAIN_NODE_IN,mainNode:event.target.value});
  };
  const handleChange2 = (event) => {
    setPrevNode(event.target.value);
    props.dispatch({type:GraphActionTypes.PREV_NODE_IN,prevNode:event.target.value});
  };

  
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };


  return (
    <div>

      <Typography variant="h5" className={classes.Choose1}>
      Select Main Node
      </Typography>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Main Node</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={mainNode}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {mainNodeItems.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
          </Select>
      </FormControl>



      <Typography variant="h5" className={classes.Choose2}>
      Select Previous Node
      </Typography>

      <FormControl className={classes.formControl2}>
        <InputLabel >Previous Node</InputLabel>
        <Select
          open={open2}
          onClose={handleClose2}
          onOpen={handleOpen2}
          value={prevNode}
          onChange={handleChange2}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {prevNodeItems.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
          </Select>
      </FormControl>
      {console.log(props.mainNode)}
      {console.log(props.prevNode)}
      <Typography variant="h5" className={classes.Choose3}>
      Select All Intents
      </Typography>

      <FormControl className={clsx(classes.formControl3, classes.noLabel)}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={inputIntents}
          input={<Input />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Select</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Select Intents</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    mainNode:state.graph.mainNode,
    prevNode:state.graph.prevNode,
    allIntents:state.graph.allIntents
  };
}

//export default Counter;
export default connect(mapStateToProps)(MultipleSelect);
