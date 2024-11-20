import React, { useState } from 'react';
import './quiz.css';

const Quiz = () => {
    const questions = [
        {
            question: "¿Cuál es el primer paso en el proceso de comunicación?",
            options: ["Codificación", "Fuente", "Retroalimentación"],
            answer: "Fuente"
        },
        {
            question: "¿Qué tipo de comunicación involucra la autorreflexión?",
            options: ["Intrapersonal", "Grupal", "Interpersonal"],
            answer: "Intrapersonal"
        },
        {
            question: "¿Qué tipo de comunicación implica interacción entre personas?",
            options: ["Interpersonal", "Intrapersonal", "Grupal"],
            answer: "Interpersonal"
        },
        {
            question: "¿Qué tipo de comunicación se utiliza en el trabajo en equipo?",
            options: ["Grupal", "Organizacional", "Interpersonal"],
            answer: "Grupal"
        },
        {
            question: "¿Qué tipo de comunicación ocurre dentro de las empresas o instituciones?",
            options: ["Organizacional", "Intrapersonal", "Grupal"],
            answer: "Organizacional"
        },
        {
            question: "¿Qué es una barrera?",
            options: ["Elemento que interfiere en la comunicación", "Elemento que ayuda en la comunicación", "Una pared"],
            answer: "Elemento que interfiere en la comunicación"
        },
        {
            question: "¿Qué significa la 'Codificación' en el proceso de comunicación?",
            options: ["Transformar las ideas en símbolos", "Enviar el mensaje", "Recibir el mensaje"],
            answer: "Transformar las ideas en símbolos"
        },
        {
            question: "¿Qué se necesita para favorecer un diálogo efectivo?",
            options: ["Hablar mucho sin escuchar", "Establecer confianza mutua y compartir intereses", "Evitar expresar opiniones personales", "Imponer tus creencias a los demás"],
            answer: "Establecer confianza mutua y compartir intereses"
        },
        {
            question: "¿Qué implica la habilidad de la asertividad?",
            options: ["Afirmación de la propia personalidad, confianza en sí mismo y comunicación eficiente", "Aceptar las opiniones de los demás sin cuestionarlas", "Evitar expresar opiniones para evitar conflictos", "Manipular a los demás para lograr nuestros objetivos"],
            answer: "Afirmación de la propia personalidad, confianza en sí mismo y comunicación eficiente"
        },
        {
            question: "¿Qué debe hacer una persona al comunicar sus emociones?",
            options: ["Ignorar los sentimientos propios", "Comunicar los sentimientos de manera indirecta", "Expresar los sentimientos de manera directa, honesta y apropiada", "Reprimir los sentimientos para no molestar a los demás"],
            answer: "Expresar los sentimientos de manera directa, honesta y apropiada"
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [answered, setAnswered] = useState(false);

    const handleAnswer = (option) => {
        setSelectedOption(option);
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        setAnswered(true);
    };

    const nextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setAnswered(false);
            setSelectedOption(null);
        } else {
            setShowScore(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setAnswered(false);
        setSelectedOption(null);
    };

    // Función para mostrar mensaje final y carita según la puntuación
    const getFinalMessage = () => {
        if (score <= 3) {
            return (
                <div>
                    <p>Refuerza tus habilidades comunicativas</p>
                    <div className='carita'>😞</div> {/* Carita triste */}
                </div>
            );
        } else if (score <= 6) {
            return (
                <div>
                    <p>Aún tienes errores al comunicarte</p>
                    <div className='carita'>😐</div> {/* Carita neutral */}
                </div>
            );
        } else if (score <= 9) {
            return (
                <div>
                    <p>Eres buen comunicador, solo perfeccionalo</p>
                    <div className='carita'>🙂</div> {/* Carita feliz */}
                </div>
            );
        } else {
            return (
                <div>
                    <p>Eres un excelente comunicador, ¡felicidades!</p>
                    <div  className='carita' style={{ color: 'green' }}>😊</div> {/* Carita feliz verde */}
                </div>
            );
        }
    };

    return (
        <div className='texto1'>
            {showScore ? (
                <div>
                    <h2>Tu puntuación: {score}/{questions.length}</h2>
                    {getFinalMessage()}
                    <button onClick={restartQuiz}>Reiniciar</button>
                </div>
            ) : (
                <div>
                    <h3>{questions[currentQuestion].question}</h3>
                    {questions[currentQuestion].options.map((option) => (
                        <button
                            key={option}
                            onClick={() => handleAnswer(option)}
                            disabled={answered}
                            className={selectedOption === option ? (option === questions[currentQuestion].answer ? "correct" : "incorrect") : ""}
                        >
                            {option}
                        </button>
                    ))}
                    {answered && (
                        <div>
                            <p>{selectedOption === questions[currentQuestion].answer ? "¡Correcto!" : "Incorrecto!"}</p>
                            <button onClick={nextQuestion}>Siguiente</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Quiz;
