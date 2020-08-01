import React, { Fragment, useState } from 'react';
import PropType from 'prop-types';
// importamos el generador de id
import { uuid } from 'uuidv4';
//  Component Functional
const Formulario = ({addNewCita }) => {
    // crear state de citas
    const [cita, setCita] = useState({
        id: '',
        mascota: '',
        propietario: '',
        fecha : '',
        hora : '',
        sintomas: ''
    });
    // creamos state para validar
    const [error, setError ] = useState(false);  

    // Función que se ejecuta cuando cada usuario escribe en el input
    const addTextForm = (e) => {
        console.log('ADD_TEXT_CITA');
        console.log(e.target.name);
        console.log(e.target.value);
        setCita({
            ...cita,
            [e.target.name] : e.target.value
        });
    }
    // Añadimo la cita cuando seleccionamos añadir 
    const addCita = (e) => {
        console.log('ADD_CITA');
        e.preventDefault();
        // Validar datos
        if( mascota.trim() === '' || 
            propietario.trim() === '' ||
            fecha.trim() === '' || 
            hora.trim() === '' ||
            sintomas.trim() === ''
        ){
            console.log('hay un error');
            setError(true);
            return;
        }
        // eliminar el mensaje 
        setError(false);
        // Asignar un id
        cita.id = uuid();
        // Crear la cita utilizamos la función que viene por el props del componente padre
        addNewCita(cita);
        // Reiniciar el form
        setCita({
            id: '',
            mascota: '',
            propietario: '',
            fecha : '',
            hora : '',
            sintomas: ''
        });
    }
    // Extraer los valores del useState
    const { mascota, propietario, fecha, hora, sintomas } = cita; 
    return (
        <Fragment>
            <h2>Crear formulario</h2>
            {
                error ? 
                <p className="alerta-error"> Todos los campos son obligatorios </p>
                : null
            }
            <form
                onSubmit={ addCita }
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de mascota"
                    onChange={ addTextForm }
                    value = {mascota}
                />
                <label>Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño" 
                    onChange={ addTextForm }
                    value = {propietario}
                    />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={ addTextForm }
                    value = {fecha}
                />
                <label>Horo</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={ addTextForm }
                    value = {hora}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={ addTextForm }
                    value = {sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>

        </Fragment>
    );
}
Formulario.prototype = {
    addNewCita: PropType.func.isRequired
}
export default Formulario;