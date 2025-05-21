import './App.css'
import Contador from './componentes/Contador'
import ExercicioProps from './componentes/ExercicioProps'

function App() {
  
  return (
    <>
      {/* <Contador/>    */}
      <ExercicioProps nome="Maria Souza" idade="28"  profissao="Engenheira de Software"/>
      <ExercicioProps nome="Eliezer Martinhago" idade="25"  profissao="Engenheiro de Software"/>
    </>
  )
}

export default App
