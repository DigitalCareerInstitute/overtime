
import React from 'react';

import { IconButton, makeStyles } from '@material-ui/core';
import { downloadName } from './lib'
import CoudDownload     from '@material-ui/icons/CloudDownload';
import Mail             from '@material-ui/icons/Mail';
import { connect }      from 'react-redux';

import {
  overtimeProps,
  overtimeActions
} from './redux'

import {
  renderDate, renderHours, recMatchesMode
} from './lib'

export function toCSV([mode,list]){
  return `data:text/csv;base64,${btoa(
      list.filter( rec => recMatchesMode(rec,mode) ).reduce((p,c) => {
        const [date,time,comment] = [renderDate(c[0]),renderHours(c[1]),c[2]];
        return p += `${date},${time},${comment}\n`;
      },'')
    )}`;
};

export function toMailURL([mode,list,user,mailToAddress]){
  const total = list.reduce( (total,rec) => {
    return recMatchesMode(rec,mode) ? total += rec[1] : total;
  },0);
  return (
    `mailto:?to=${mailToAddress}` +
    `&subject=${encodeURIComponent(`Overtime ${user}`)}` +
    `&body=${encodeURIComponent(
      "Hi,\n" +
      "this is my overtime report,\n\n" +
      "Best regards,\n" +
      `${user}\n\n` +
      "------------------------------------------------\n" +
      list.filter( rec => recMatchesMode(rec,mode) ).reduce((p,c) => {
        return p += `${renderDate(c[0])}\t${renderHours(c[1])}\t${c[2]}\n`;
      },'') +
      "------------------------------------------------\n" +
      `Total: ${renderHours(total)} hours\n` +
      "------------------------------------------------\n"
    )}`
)};

const useStyles = makeStyles(theme => ({
  menuButton: { marginRight: theme.spacing(2) },
}));

export default connect(
  overtimeProps,
  overtimeActions
)(
function({mode,list,user,mailToAddress}){
  const classes = useStyles();

  const csv = React.useMemo (
    ()=> toCSV([mode,list]),
    [mode,list]
  );

  const mailto = React.useMemo (
    ()=> toMailURL([mode,list,user,mailToAddress]),
    [mode,list,user,mailToAddress]
  );

  return ( <>
  <IconButton className={classes.menuButton} href={mailto} color="inherit" aria-label="mail">
    <Mail/>
  </IconButton>
  <IconButton className={classes.menuButton} download={downloadName(user,mode)} href={csv} color="inherit" aria-label="csv">
    <CoudDownload/>
  </IconButton>
  </> );
})
