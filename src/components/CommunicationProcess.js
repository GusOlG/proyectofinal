import React from 'react';
import './Home.css';

const CommunicationProcess = () => (
    <div>
        <div className="home-title">
        <h2>Proceso de comunicación</h2>
        <p>Sigue los pasos: Fuente → Codificador → Mensaje → Canal → Decodificador → Retroalimentación.</p>
        </div>
        
        <div className="Pasos">
        <ul>
            <li><strong>Fuente:</strong> El origen del mensaje.</li>
            <br></br>
            <li><strong>Codificación:</strong> Hacer las ideas simbolos.</li>
            <br></br>
            <li><strong>Canal:</strong> El medio por donde transmitimos la información.</li>
            <br></br>
            <li><strong>Decodificador:</strong> Hacer los simbolos ideas.</li>
            <br></br>
            <li><strong>Retroalimentación:</strong> Recibir una respuesta al mensaje original.</li>
        </ul>
        <div className="home-container">
        <img src={require('./imagenes/pasos.PNG')} alt="Pasos" className="centered-image" />
        </div>
        </div>
        
        
    </div>
);

export default CommunicationProcess;