import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FormWithCustomHooks from './Custom/FormWithCustomHooks'
import MultipleCustomHooks from './03-examples/MultipleCustomHooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
        <MultipleCustomHooks/>
    </div>
  )
}

export default App
