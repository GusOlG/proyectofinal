import React, { useState } from 'react';
import './Home.css';

const TypesOfCommunication = () => {
    const [selectedType, setSelectedType] = useState(null);

    const types = {
        Intrapersonal: (
            <span>
                Reflexión interna y autoestima.<br />
                Ejemplo: Un estudiante reflexionando sobre sus metas profesionales y cómo podría alcanzarlas, analizando sus fortalezas y debilidades para mejorar su autoestima.
            </span>
        ),
        Interpersonal:(
            <span>
                Diálogo entre personas, asertividad. <br />
                Ejemplo: Dos amigos discutiendo sobre sus planes de vacaciones, escuchándose mutuamente y haciendo acuerdos sobre el destino a elegir. Aquí, la asertividad es clave para que ambos expresen sus opiniones y se respeten.
            </span>
        ),
        Grupal:(
            <span>
                Resolución de problemas en equipo.<br />
                Ejemplo: Un equipo de trabajo en una reunión tratando de resolver un problema específico, como mejorar el rendimiento de un proyecto, donde todos colaboran y comparten ideas.
            </span>
        ),
        Organizacional:(
            <span>
                Comunicación estructurada en empresas.<br />
                Ejemplo: Un jefe dando instrucciones claras y estructuradas a su equipo sobre cómo llevar a cabo un proyecto dentro de la empresa, asegurándose de que todos comprendan el objetivo y el plan de acción.
            </span>
        ),
    };

    return (
        <div className='texto1'>
            <h2>Tipos de comunicación</h2>
            <p>Clickea en un tipo para saber más:</p>
            {Object.keys(types).map((type) => (
                <button key={type} onClick={() => setSelectedType(type)}>
                    {type}
                </button>
            ))}
            {selectedType && (
                <div>
                    <h3>{selectedType}</h3>
                    <p>{types[selectedType]}</p>
                </div>
            )}
        </div>
    );
};

export default TypesOfCommunication;