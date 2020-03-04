
import React                            from 'react';

import { makeStyles }                   from '@material-ui/core/styles';
import Table                            from '@material-ui/core/Table';
import TableRow                         from '@material-ui/core/TableRow';
import TableCell                        from '@material-ui/core/TableCell';
import IconButton                       from '@material-ui/core/IconButton';
import Autocomplete                     from '@material-ui/lab/Autocomplete';
import HighlightOff                     from '@material-ui/icons/HighlightOff';

import { TextField, }                   from '@material-ui/core';
import { DateTimePicker, TimePicker }   from '@material-ui/pickers';
import { recMatchesMode, recIsntBreak } from './lib'
import moment                           from 'moment'

import { connect }                      from 'react-redux';
import {
  overtimeProps,
  overtimeActions
} from './redux'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default connect(
  overtimeProps,
  overtimeActions
)( function({list,preset,mode,delRecord,editRecord}){
  const classes = useStyles();
  return (
  <Table className={classes.root}><tbody>{
    list
    .filter( rec => recIsntBreak(rec,false,false) )
    .filter( rec => recMatchesMode(rec,mode) )
    .map( (row,id) => {
      const [date,time,comment] = row;
      let utcTime = moment(time).utcOffset(0)
      return (
      <TableRow key={id}>
        <TableCell>
          <DateTimePicker
            className="list-date"
            format="DD.MM.YYYY HH:mm"
            value={date}
            ampm={false}
            onChange={ value => editRecord(id,[value.valueOf(),time,comment])}
          />
          <TimePicker
            format="HH:mm"
            className="list-time"
            value={utcTime} ampm={false}
            onChange={ value => editRecord(id,[date,value.valueOf(),comment])}
          />
        </TableCell>
        <TableCell style={{flexGrow:'1'}}>
          <Autocomplete freeSolo
            className={classes.input}
            id="comment"
            options={preset}
            value={comment}
            onChange={ (e,value) => editRecord(id,[date,time,value])}
            renderInput={params =>
            <TextField
              onChange={ e => editRecord(id,[date,time,e.target.value])}
              {...params}
          />}/>
        </TableCell>
        <TableCell>
          <IconButton onClick={e => delRecord(id)}>
            <HighlightOff/>
          </IconButton>
        </TableCell>
      </TableRow> )})}
  </tbody></Table>
)});
