import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/dharun.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Body from './components/Body.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Router >

        <App />

            <Routes>
                <Route path='/' element = { <Body />} /> 
            </Routes>

    </Router>
)


/*

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Body from './components/Body';
import Moviedetails from './components/Moviedetails';
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Router>
    <App />
      <Routes>
          < Route path='/' element ={ <Body />} />
          <Route exact path='/cont' element={ <Contact/>} />
          <Route path='/movie/:movId' element={ <Moviedetails />} />
      </Routes>
  </Router>

      < Link to={'/movie/'+movie.id} state={{data : movie}}>
  );

  */