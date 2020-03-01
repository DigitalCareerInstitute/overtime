
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { renderHours } from './lib'

export default function Counter({active,start}){
  const diff = new Date( Date.now() - start );
  if ( ! active ) return null;
  return ( <Alert variant="filled" severity="error">{ renderHours(diff) }</Alert>
)}
