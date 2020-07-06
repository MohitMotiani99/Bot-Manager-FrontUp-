import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import GraphDemoMain from "./FeatureFolder/GraphDemoMain"
import HealthMain from "./FeatureFolder/HealthMain"
import ReqAnalysisMain from "./FeatureFolder/ReqAnalysisMain"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeMessage from "./HomeMessage";
import scenarioManager from "./FeatureFolder/ScenarioManager";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SelectedListItem() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Router>
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Bot manager" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
        <ListItemIcon>
            <InboxIcon />
        </ListItemIcon>
          <ListItemText primary="Trained Data" />
        </ListItem>

       <Link to={'/scenarioManager'} style={{textDecoration:"none",color:"inherit"}}>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Scenario Manager" />
        </ListItem>
        </Link>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Bot Tester" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Train Bot" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Unrecognized Input" />
        </ListItem>

        <Link to={'/GraphDemoMain'} style={{textDecoration:"none",color:"inherit"}}>
        <ListItem
          button
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Graph Demo" />
        </ListItem>
        </Link>

        <Link to={'/ReqAnalysisMain'} style={{textDecoration:"none",color:"inherit"}}>
        <ListItem
          button
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Request Analysis" />
        </ListItem>
        </Link>

        <Link to={'/HealthMain'} style={{textDecoration:"none",color:"inherit"}}>
        <ListItem
          button
          selected={selectedIndex === 8}
          onClick={(event) => handleListItemClick(event, 8)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText className={classes.text} primary="Health Status" />
        </ListItem>
        </Link>
      </List>
      
    </div>


          <Switch>
              <Route exact path='/HealthMain' component={HealthMain} />
              <Route exact path='/ReqAnalysisMain' component={ReqAnalysisMain} />
              <Route exact path='/GraphDemoMain' component={GraphDemoMain} />
              <Route exact path='/scenarioManager' component={scenarioManager} />
              
          </Switch>

    </Router>
  );
}
//              <Route exact path='' component={HomeMessage} />
