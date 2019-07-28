import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './components/pages/Home';

import './App.css';

function App() {
  
  return (
    <MuiThemeProvider>
        <Home/>
    </MuiThemeProvider>
  );
}

export default App;
