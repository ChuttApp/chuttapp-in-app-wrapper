import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom'

import { MainApp } from './navigations/MainApp';

function App() {
  return (
     <Router basename='/'>
       <MainApp />
     </Router>
  );
}

export default App;
