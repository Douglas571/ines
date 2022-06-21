import { useState } from 'react';
import './App.css';

import Home from './views/Home.jsx'
import Forms from './routes/Formularies.jsx'
import FormsView from './routes/FormulariesView.jsx'
import FormsEdit from './routes/FormsEdit.jsx'

import { Provider } from 'react-redux'
import store from './store/store.jsx'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
      <>
        <Provider store={store}>
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
        </Provider>
    </>
  )
};

export default App;
