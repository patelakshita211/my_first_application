import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Components/counter.jsx'
import Calculator from './Components/calculator.jsx'
import Parent from './Components/parent.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Counter/> */}
    {/*<Calculator/> */}
    <Parent/>
    </>
  )
}


export default App
