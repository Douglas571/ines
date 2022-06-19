import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AppBar from './components/AppBar.jsx';

import Skeleton  from '@mui/material/Skeleton';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';

const App = () => {

  return (
    <div className="App">
        <AppBar/>
        <Button variant="contained">Hello World</Button>
        <Paper elevation={2} square variant="outlined">
          <Typography>
            Hello world
          </Typography>
          <Typography variant={"h1"}>
            <Skeleton width="50%"/>
          </Typography>
          <Fab color="primary">
            +
          </Fab>
          
        </Paper>

    </div>
  );
};

export default App;
