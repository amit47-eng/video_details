import { useState } from 'react'
import './App.css'
// import Form from './Form'
import CountdownTimer from './countdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <Form/> */}
    <CountdownTimer/>
    </>
   
  )
}

export default App
