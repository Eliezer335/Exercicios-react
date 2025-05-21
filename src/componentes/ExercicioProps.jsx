import './styleProps.css'

function ExercicioProps ({nome, idade, profissao}){
    return(
        <>
            <div className="ProfileCard">
                <h3>Nome: {nome}</h3>
                <p>Idade: {idade}</p>
                <p>Profição: {profissao}</p>
            </div>
        </>    
    )
}

export default ExercicioProps