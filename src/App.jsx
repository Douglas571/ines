import { useState } from 'react';
import './App.css';

import Home from './views/Home.jsx'
import Formularies from './routes/Formularies'

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
          <Route path='formularies' element={<Formularies/>}/>
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
