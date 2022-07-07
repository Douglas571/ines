import { useState } from 'react';

import Home from './views/Home.jsx'

import Forms from './routes/Forms.jsx'
import FormsView from './routes/FormsView.jsx'
import FormsCreate from './routes/FormsCreate.jsx'
import FormsEdit from './routes/FormsEdit.jsx'

import Teachers from './routes/Teachers.jsx'
import TeachersView from './routes/TeachersView.jsx'

import Evaluate from './routes/Evaluate.jsx'

import Results from './routes/Results.jsx'

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
              <Route path='create' element={<FormsCreate/>}/>
              <Route path='edit/:id' element={<FormsEdit/>}/>
            </Route>
            
            <Route path="teachers">
              <Route path='' element={<Teachers/>}/>
              <Route path=':id' element={<TeachersView/>}/>
            </Route>

            <Route path="evaluate" element={<Evaluate/>}/>

            <Route path="results" element={<Results/>}/>
            
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
