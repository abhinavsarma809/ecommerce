import { useState } from 'react'
import NavBar from './navbar'
import './App.css'
import Nav from './Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <Nav/>
       
    </>
  )
}

export default App
