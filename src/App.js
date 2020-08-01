import React, { useState } from 'react';

// Importar el componente personalizado
import Formulario from './Components/Formulario';

function App() {
  // Array de todas las citas creadas
  const [ citas, setCitas] = useState([]);

  // Función que añade nuevas citas al array
  const addNewCita = (cita) => {
    console.log('ADD_NEW_CITA');
    console.log(cita);
    setCitas([
      ...citas,
      cita
    ]);
    console.log(citas);
  }

  return (
    <div className="App">
      <h1>Administración de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario addNewCita={addNewCita}/>
          </div> 
          <div className="one-half column">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
