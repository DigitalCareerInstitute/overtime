
const { localStorage } = window;

const renderTime = (diff)=>
  `${diff.getHours()-1}h ${diff.getMinutes()}m ${diff.getSeconds()}s`

const loadStore = (defaults) =>
  JSON.parse(localStorage.getItem('overtime') || 'null') || defaults;

const saveStore = (state) =>
  localStorage.setItem('overtime',JSON.stringify(state));

const renderDate = (date) =>
  ( new Date(date) ).toLocaleDateString('de-DE')

const renderHours = (date) =>
  date / 1000 / 60 / 60

export { renderTime, renderDate, renderHours, loadStore, saveStore };
