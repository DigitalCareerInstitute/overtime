
import { createStore } from 'redux'
import moment          from 'moment'
import defaults        from "./defaults"

const { localStorage } = window;

const save = state =>
  localStorage.setItem('overtime',JSON.stringify(state));

const load = () =>
  JSON.parse( localStorage.getItem('overtime') || 'false' )
  || defaults;

const preloadedState = load();

let timerComponent = null;

const overtimeReducer = ( state = preloadedState , action )=> {
  const { type, index, value } = action;
  const { list, active } = state;
  const activate = function() {
    return {
      active:true,
      start:Date.now(),
      timer:setTimer(timerComponent)
    }
  }
  const deactivate = () => {
    const { start, comment, timer } = state;
    const diff = Date.now() - start;
    clearInterval(timer);
    return {
      active:false,
      start:Date.now(),
      comment:'',
      list:[[start,diff,comment]].concat(list) };
  }
  const setTimer = (c) => setInterval(t => { c.forceUpdate() }, 1000 );
  switch (type) {
    case 'setTimerComponent': timerComponent = value; break;
    case 'insertWorkday':     state = { ...state, list:[[moment().startOf('day').valueOf(),-state.workHours*1000*60*60,'Workday']].concat(list) }; break;
    case 'addRecord':         state = { ...state, list:[value].concat(list) }; break;
    case 'delRecord':         state = { ...state, list:[...(list.filter( (_,id)=> id !== index ))] }; break;
    case 'editRecord':        list[index] = value; state = { ...state, list:list.slice() }; break;
    case 'setWorkHours':      state = { ...state, workHours:parseFloat(value)}; break;
    case 'setMode':           state = { ...state, mode:value}; break;
    case 'setPreset':         state = { ...state, comment:value }; break;
    case 'setUser':           state = { ...state, user:value}; break;
    case 'setMailToAddress':  state = { ...state, mailToAddress:value}; break;
    case 'setComment':        state = { ...state, comment:value}; break;
    case 'setEdit':           state = { ...state, editRow:value}; break;
    case 'swapComment':       if ( ! active ) return state;
                              state = { ...state, ...deactivate(), ...activate() }; break;
    case 'toggle':            state = { ...state, ...(active ? deactivate() : activate()) }; break;
    case 'addPreset':         state = { ...state,  preset: [value].concat(state.preset) }; break;
    case 'delPresetId':       state = { ...state,  delPreset:false, preset: state.preset.filter( (_,i) => i !== index ) }; break;
    case 'toggleSettings':    state = { ...state, showSettings: ! state.showSettings }; break;
    case 'toggleCountBreaks': state = { ...state, countBreaks: ! state.countBreaks }; break;
    case 'toggleShortBreaks': state = { ...state, countShortBreaks: ! state.countShortBreaks }; break;
    case 'clearTimer':        clearInterval(state.timer); break;
    default: break; }
  save(state); return state;
}

export const overtimeActions = function(dispatch){ return {
  setEdit:           function(value){       dispatch({ type:'setEdit',           value        }); },
  setTimerComponent: function(value){       dispatch({ type:'setTimerComponent', value        }); },
  addRecord:         function(value){       dispatch({ type:'addRecord',         value        }); },
  delRecord:         function(index){       dispatch({ type:'delRecord',         index        }); },
  editRecord:        function(index,value){ dispatch({ type:'editRecord',        value, index }); },
  setWorkHours:      function(value){       dispatch({ type:'setWorkHours',      value        }); },
  setMode:           function(value){       dispatch({ type:'setMode',           value        }); },
  setPreset:         function(value){       dispatch({ type:'setPreset',         value        }); },
  setUser:           function(value){       dispatch({ type:'setUser',           value        }); },
  setMailToAddress:  function(value){       dispatch({ type:'setMailToAddress',  value        }); },
  setComment:        function(value){       dispatch({ type:'setComment',        value        }); },
  addPreset:         function(value){       dispatch({type:'addPreset',          value        }); },
  delPresetId:       function(index){       dispatch({type:'delPresetId',        index        }); },
  swapComment:       function(){            dispatch({ type:'swapComment'                     }); },
  toggle:            function(){            dispatch({type:'toggle',                          }); },
  clearTimer:        function(){            dispatch({type:'clearTimer',                      }); },
  toggleSettings:    function(){            dispatch({type:'toggleSettings',                  }); },
  toggleCountBreaks: function(){            dispatch({type:'toggleCountBreaks',               }); },
  toggleShortBreaks: function(){            dispatch({type:'toggleShortBreaks',               }); },
  insertWorkday:     function(){            dispatch({type:'insertWorkday',                   }); }
}};

export const overtimeProps = state => state
export default createStore( overtimeReducer );
