import React from 'react';

const Cita = ({cita, deleteCita}) => {
 // Extraer los valores del useState
 const { id, mascota, propietario, fecha, hora, sintomas } = cita; 

    return (
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>Propietario: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>

            <button
                className="button eliminar u-full-width"
                onClick={ () => deleteCita(id) }
            >Eliminar &times;</button>
        </div>
    );
} 
export default Cita;