
import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';

import Overtime from './Overtime';
import store from './redux'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment'

import moment from 'moment';
import 'moment/locale/de';

moment.updateLocale('de',{ relativeTime : {
  future : '%s',
  past : '%s',
  s : '>1m',
  m : '1m',
  mm : '%dm',
  h : '1h',
  hh : '%dh',
  d : '1d',
  dd : '%dd',
  M : '1m',
  MM : '%dm',
  y : '1y',
yy : '%dy'
}})

const themeDark = createMuiTheme({
  palette: { type: 'dark' },
});

const themeLight = createMuiTheme({
  palette: { type: 'light' },
});

function ThemeSwitcher({children}){
  const [light,setLight] = React.useState(false)
  window.setLight = setLight
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      {children}
    </ThemeProvider>
  );
}

ReactDOM.render(
  ( <Provider store={store}>
      <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={'de'}>
        <ThemeSwitcher>
          <CssBaseline />
          <Overtime/>
        </ThemeSwitcher>
      </MuiPickersUtilsProvider>
    </Provider>
  ), document.getElementById('root'));

serviceWorker.register();
