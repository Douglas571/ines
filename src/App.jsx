import { useState } from 'react';
import './App.css';

import Home from './views/Home.jsx'
import Forms from './routes/Forms.jsx'
import FormsView from './routes/FormsView.jsx'
import FormsEdit from './routes/FormsEdit.jsx'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='formularies'>
              <Route path='' element={<Forms/>}/>
              <Route path=':id' element={<FormsView/>}/>
              <Route path='edit/:id' element={<FormsEdit/>}/>
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>

        </BrowserRouter>
    </>
  )
};

export default App;
