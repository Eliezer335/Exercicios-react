
import { useEffect } from 'react';

export default function BoasVindas() {
  useEffect(() => {
    alert('Bem-vindo(a) ao site!');
  }, []);

  return <h1>Olá visitante!</h1>;
}

