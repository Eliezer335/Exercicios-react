function ListaDeAlunos() {
  const alunos = ['Ana', 'Bruno', 'Carlos', 'Daniela'];
  
  return(
    <>
        <div>
            {alunos.map(i => <ul>{i}</ul>)}
        </div>
    </>
  )
  
}

export default ListaDeAlunos