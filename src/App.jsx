import { useState } from 'react'
import './App.css'
import './/componentes/contador'

function App() {
  const [count, setCount] = useState(0)
  const [tema, setTema] = useState(true)

  return (
    <>
      <div className='contador'>
        {count}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Somar 1
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
        <button onClick={() => setTema(prev => !prev)}>
          Mudar Tema
        </button>
      </div>
    </>
  )
}

export default App
