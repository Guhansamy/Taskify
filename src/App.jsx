import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import {CreateForm} from './components/CreateForm'

function App() {

  return (
    <>
      <Header />
      {/* <Body/> */}
      <CreateForm/>
    </>
  )
}

export default App
