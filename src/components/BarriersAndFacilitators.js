import React, { useState } from 'react';
import './comunicacion.css';

const BarriersAndFacilitators = () => {
    // Primer ejemplo de barreras
    const [message1, setMessage1] = useState("¡Completalo ya!");
    const [barriers1, setBarriers1] = useState([
        { name: "Ambigüedad", message: "¡Completa el reporte ya!." },
        { name: "Tono Agresivo", message: "¿Podrias completar el reporte?." },
        { name: "Falta de Información", message: "¿Podrias completar el reporte de actividades de esta semana para el final del dia por favor?." },
    ]);

    // Función para manejar el clic en los botones de barrera en el primer ejemplo
    const handleBarrier1 = (barrierMessage) => {
        setMessage1(barrierMessage);  // Cambia el mensaje al mensaje de la barrera seleccionada
    };

    // Función para manejar el mensaje final solo cuando no hay más barreras
    const setFinalMessage1 = () => {
        if (barriers1.length === 0) {
            setMessage1("¡Reporte completado, gracias!");
        }
    };

    // Segundo ejemplo de barreras
    const [message2, setMessage2] = useState("¡Revisalo!");
    const [barriers2, setBarriers2] = useState([
        { name: "Falta de Claridad", message: "Revisa el RA." },
        { name: "Lenguaje Técnico", message: "Revisa el reporte anual." },
    ]);

    // Función para manejar el clic en los botones de barrera en el segundo ejemplo
    const handleBarrier2 = (barrierMessage) => {
        setMessage2(barrierMessage);  // Cambia el mensaje al mensaje de la barrera seleccionada
    };

    // Función para manejar el mensaje final solo cuando no hay más barreras
    const setFinalMessage2 = () => {
        if (barriers2.length === 0) {
            setMessage2("¡Gracias por la aclaración!");
        }
    };

    return (
        <div className='texto1'>
            {/* Primer ejemplo */}
            <h2>Barreras y Facilitadores - Ejemplo 1</h2>
            <p>Mensaje: "{message1}"</p>
            <h3>Barreras:</h3>
            <ul>
                {barriers1.map((barrier) => (
                    <li key={barrier.name}>
                        {barrier.name}{" "}
                        <button
                            onClick={() => {
                                // Eliminar la barrera y actualizar el mensaje
                                const updatedBarriers = barriers1.filter((b) => b.name !== barrier.name);
                                setMessage1(barrier.message); // Cambiar el mensaje a la barrera seleccionada
                                setBarriers1(updatedBarriers); // Actualizar la lista de barreras
                            }}
                        >
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
            {/* Botón adicional para forzar el mensaje final solo cuando no quedan barreras */}
            <button onClick={setFinalMessage1} disabled={barriers1.length > 0}>
                Mensaje Final
            </button>

            {/* Segundo ejemplo */}
            <h2>Barreras y Facilitadores - Ejemplo 2</h2>
            <p>Mensaje: "{message2}"</p>
            <h3>Barreras:</h3>
            <ul>
                {barriers2.map((barrier) => (
                    <li key={barrier.name}>
                        {barrier.name}{" "}
                        <button
                            onClick={() => {
                                // Eliminar la barrera y actualizar el mensaje
                                const updatedBarriers = barriers2.filter((b) => b.name !== barrier.name);
                                setMessage2(barrier.message); // Cambiar el mensaje a la barrera seleccionada
                                setBarriers2(updatedBarriers); // Actualizar la lista de barreras
                            }}
                        >
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
            {/* Botón adicional para forzar el mensaje final solo cuando no quedan barreras */}
            <button onClick={setFinalMessage2} disabled={barriers2.length > 0}>
                Mensaje Final
            </button>
        </div>
    );
};

export default BarriersAndFacilitators;
