
import { useState, useEffect } from 'react';

export default function Contador2() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);
  //O que precisa estar dentro da lista de identificação do UseEffect?

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

// no inicio da funcao usa se o useState para definir o que sera mudado e o estado inicial 
// na linha de baixo esta sendo usado o useEffect para colocar o numeros contado la em cima no titulo da pagina 
// no return temos o html com prop dos numeros contados e um botao para somar mais 1
