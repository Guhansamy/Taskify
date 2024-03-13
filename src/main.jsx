import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/dharun.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import Login from './components/Login.jsx'
import NewUser from './components/NewUser.jsx'
import { TaskList } from './components/TaskList.jsx'
import Taskspage from './components/Taskspage.jsx'
import { TaskCompo } from './components/TaskCompo.jsx'
import { CreateForm } from './components/CreateForm.jsx'

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/signUp',
        element:<NewUser/>
    },
    {
        path:'/home',
        element:<App/>,
        children:[
            {
                path:'/home/',
                element:<Body/>
            },
            {
                path:'/home/task/:id',
                element:<Taskspage/>,
                children:[
                    {
                        path:'/home/task/:id/',
                        element:<TaskList/>
                    },
                    {
                        path:'/home/task/:id/form',
                        element:<CreateForm/>
                    }
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={Router}/>
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