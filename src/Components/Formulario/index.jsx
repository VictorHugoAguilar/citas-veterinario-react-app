import React, { Fragment, useState } from 'react';


const Formulario = () => {

    // crear state de citas
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha : '',
        hora : '',
        sintomas: ''
    });

    // Función que se ejecuta cuando cada usuario escribe en el input
    const addCita = (e) => {
        console.log('ADD_CITA');
        console.log(e.target.name);
        console.log(e.target.value);

        setCita({
            ...cita,
            [e.target.name] : e.target.value
        });
    }

    // Extraer los valores del useState
    const { mascota, propietario, fecha, hora, sintomas } = cita; 

    return (
        <Fragment>
            <h2>Crear formulario</h2>
            <form>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de mascota"
                    onChange={ addCita }
                    value = {mascota}
                />
                <label>Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño" 
                    onChange={ addCita }
                    value = {propietario}
                    />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={ addCita }
                    value = {fecha}
                />
                <label>Horo</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={ addCita }
                    value = {hora}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={ addCita }
                    value = {sintomas}
                ></textarea>

                <button
                    type="button"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>

        </Fragment>
    );
}

export default Formulario;