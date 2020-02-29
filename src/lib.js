
import moment from 'moment';

const { localStorage } = window;

const recMatchesMode = ( rec, mode ) => {
  if ( mode === "Total" ) return true;
  const date  = moment(rec[0]), lMode = mode.toLowerCase();
  const modeStart = moment().startOf(lMode).valueOf();
  const modeEnd   = moment().endOf(lMode).valueOf();
  return date.isBetween(modeStart,modeEnd);
}

const renderTime = (diff)=>
  `${diff.getHours()-1}h:${diff.getMinutes()}m:${diff.getSeconds()}s`

const loadStore = (defaults) =>
  JSON.parse(localStorage.getItem('overtime') || 'null') || defaults;

const saveStore = (state) =>
  localStorage.setItem('overtime',JSON.stringify(state));

const renderDate = (date) =>
  ( new Date(date) ).toLocaleDateString('de-DE')

const renderHours = (date) =>
  date / 1000 / 60 / 60

const downloadName = (user,mode) =>
  `${user.replace(/[^a-zA-Z]+/g,'_')}_${mode.toLowerCase()}.csv`

const purgeStore = e => {
  if ( window.confirm("ARE YOU REALLY SURE?") ){
    localStorage.removeItem('overtime')
  }}

export {
  recMatchesMode,
  renderTime,
  renderDate,
  renderHours,
  loadStore,
  saveStore,
  purgeStore,
  downloadName
};
