import React from 'react';

// Importar el componente personalizado
import Formulario from './Components/Formulario';

function App() {
  return (
    <div className="App">
      <h1>Administración de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
<Formulario />
          </div> 
          <div className="one-half column">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
