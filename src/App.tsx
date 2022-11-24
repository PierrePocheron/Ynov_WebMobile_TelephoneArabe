import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <img src="/android-chrome-512x512.png" className="logo" alt="App logo" />
      </div>

      <h1>Ynov - WebMobile - Téléphone arabe</h1>
    </div>
  )
}

export default App
