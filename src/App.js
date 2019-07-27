import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';

function App() {
  const [count, setCount] = useState(0);
  return (
    <section>
      <div>
        <div>
          <Title></Title>
          <h2>{count}</h2>
          <button onClick={() => setCount(count + 1)}>Crear cuenta gratuita</button>
          <img src={process.env.PUBLIC_URL + '/images/train.jpg'} alt="main" height="300" />
          <div>
            <ul>
              <li>
                <h3>Calificaciones con emociones</h3>
                <p>Calificac tus lugares con experiencias, no con números</p>
              </li>
              <li>
                <h3>¿Sin Internet? Sin problemas</h3>
                <p>Places funciona si internet o en conexiones lentas</p>
              </li>
              <li>
                <h3>Tus lugares favoritos</h3>
                <p>Define tu lista de sitios favoritos</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
