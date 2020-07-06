import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);





function createData(Bot_Name,Bot_Status, DT, AI, Elastic_Search,Config) {
  return { Bot_Name,Bot_Status, DT, AI, Elastic_Search,Config };
}

const rows = [
  createData('Postpaid Siebel','UP','DOWN','DOWN','UP','UP'),
  createData('Postpaid','UP','DOWN','DOWN','UP','UP'),
  createData('Payments Bank','UP','DOWN','DOWN','UP','UP'),
  createData('HR','UP','DOWN','DOWN','UP','UP'),
  createData('Prepaid','UP','DOWN','DOWN','UP','UP'),
];

const useStyles = makeStyles({
  table: {
    maxWidth: 900,
    position :"absolute",
    left:400,
    top:150
  },
  headline: {
    position: "relative",
    top: -385,
    left:-175,
  },
  line :{
    position:"relative",
    top: -400,
    width: 900,
    left: 400,
    height: 2,
    backgroundColor:"black"
  }
});



export default function CustomizedTables() {
  const classes = useStyles();
  let result=[];
  async function healthCheck(){
            let res =  await fetch('http://10.5.205.104:8080/trainer/getHealthCheckStatus', {
                method: 'get',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    
                })
            });
            //console.log(res);

            result = await res.json();

            console.log(result);

  }
  {console.log(result)}

  return (
        <div>
    <Typography  variant="h3" gutterBottom className={classes.headline}>
        Health Check Status
    </Typography>


    <Divider className={classes.line}/>

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Bot Name</StyledTableCell>
            <StyledTableCell align="right">Bot Satus</StyledTableCell>
            <StyledTableCell align="right">DT</StyledTableCell>
            <StyledTableCell align="right">AI</StyledTableCell>
            <StyledTableCell align="right">Elastic Search</StyledTableCell>
            <StyledTableCell align="right">Configuration</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.Bot_Name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.DT}</StyledTableCell>
              <StyledTableCell align="right">{row.AI}</StyledTableCell>
              <StyledTableCell align="right">{row.AutoSuggest}</StyledTableCell>
              <StyledTableCell align="right">{row.welcomeConfig}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Button style={{textTransform:"capitalize",position:"relative",top:-30,left:70}} variant="contained" color="primary" disableElevation >
      Refresh
    </Button>

    </div>

  );
}
