import { useState, useEffect } from 'react';
import './Boton.css';

function Boton() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(contador);
  }, [contador]);

  return (
    <button
      onClick={() => setContador(!contador)}
      className="boton-redondo"
      style={{
      backgroundColor: contador ? '#c70000ff' : '#ffef11', 
      }}
    >
      {contador ? 'ಠ╭╮ಠ' : '｡☉‿☉｡'}
    </button>
  );
}

export default Boton;
