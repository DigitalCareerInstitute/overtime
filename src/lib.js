
import moment from 'moment';

const { localStorage } = window;

const recMatchesMode = ( rec, mode ) => {
  if ( mode === "Total" ) return true;
  const date  = moment(rec[0]), lMode = mode.toLowerCase();
  const modeStart = moment().startOf(lMode).valueOf();
  const modeEnd   = moment().endOf(lMode).valueOf();
  return date.isBetween(modeStart,modeEnd);
}

const recIsntBreak = ( rec, countBreaks=false, countBreaksUnder15Minutes = false ) => {
  if ( countBreaks ) return true;
  if ( rec[2].toLowerCase() === 'break' ){
    if ( countBreaksUnder15Minutes && rec[1] < 1000 * 60 * 15 ) return true;
    return false;
  } return true;
}

const renderTime = (start)=>
  moment(start).toNow(true)

const loadStore = (defaults) =>
  JSON.parse(localStorage.getItem('overtime') || 'null') || defaults;

const saveStore = (state) =>
  localStorage.setItem('overtime',JSON.stringify(state));

const renderDate = (date) =>
  ( new Date(date) ).toLocaleDateString('de-DE')

const renderTotal = (date) =>
  moment(date).to(moment(0),true)

const renderHours = (date) =>
  moment(date).utcOffset(0).format('HH:mm')

const downloadName = (user,mode) =>
  `${user.replace(/[^a-zA-Z]+/g,'_')}_${mode.toLowerCase()}.csv`

const purgeStore = e => {
  if ( window.confirm("ARE YOU REALLY SURE?") ){
    localStorage.removeItem('overtime')
  }}

export {
  recIsntBreak,
  recMatchesMode,
  renderTime,
  renderDate,
  renderHours,
  loadStore,
  saveStore,
  renderTotal,
  purgeStore,
  downloadName
};
