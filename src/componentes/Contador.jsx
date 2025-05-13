import { useState } from 'react'

function Contador() {
  const [count, setCount] = useState(0)
  const [tema, setTema] = useState(true)
  const ternario = (tema === true) ? 'black' : 'lightgray'
  const click = () => {
    setTema(prevState => !prevState)
  }

  return (
    <>
      <div className='contador'>
        {count}
      </div>

      <div className="card" style={{backgroundColor: ternario}}>
        
        <button onClick={() => setCount((count) => count + 1)}>
          Somar 1
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
        <button onClick={click}>
          {tema ? 'Claro' : 'Escuro'}
        </button>
      </div>
    </>
  )
}

export default Contador;