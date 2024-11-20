import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Función para abrir y cerrar el modal
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    // Función para cerrar el modal si se hace clic fuera de él
    const handleCloseModal = (e) => {
        // Verifica si el clic fue fuera del modal
        if (e.target.classList.contains('modal-overlay')) {
            setIsModalOpen(false);
        }
    };

    return (
        <div className="home-container">
            <div className="home-title">
                <h1>Explorador de comunicación.</h1>
                <p>Aprende a través de ejercicios y explicaciones interactivas.</p>
            </div>

            {/* Botón de información en la esquina inferior derecha */}
            <div className="info-button-container">
                <span className="info-text">Gustavo Olvera Gonzalez</span>
                <button className="info-button" onClick={toggleModal}>
                    ℹ️
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal">
                        <button className="close-button" onClick={toggleModal}>X</button>
                        <h2>Información de contacto</h2>
                        <p><strong>Nombre:</strong> Gustavo Olvera Gonzalez</p>
                        <p><strong>Semestre:</strong> 8vo Semestre</p>
                        <p><strong>Correo:</strong> cyberdyne44@gmail.com</p>
                        <p><strong>Teléfono:</strong> 4425490111</p>
                        <p><strong>Carrera:</strong> Ingeniería en Computación</p>
                        <p><strong>20/11/2024</strong></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
