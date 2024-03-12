import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import {CreateForm} from './components/CreateForm'
import Taskspage from './components/Taskspage'

function App() {

  return (
    <>
      <Header />
      {/* <Body/> */}
      {/* <CreateForm/> */}
      <Taskspage/>
    </>
  )
}

export default App
