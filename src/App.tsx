import React from 'react';
import './App.css';
import Calendar from './calender/calendar';

function App() {
  return (
    <Calendar date={new Date('Fri Feb 10 2023 17:04:12 GMT+0530 ')}/>
  );
}

export default App;
