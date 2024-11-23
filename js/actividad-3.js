function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer, feedbackId, explanation) {
        const feedbackSpan = document.getElementById(feedbackId);
        
        // Para los campos de texto
        if (['q8', 'q9', 'q10'].includes(questionName)) {
            const textAnswer = document.querySelector(`input[name=${questionName}]`).value.trim();
            if (textAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                correctCount++;
                feedbackSpan.innerHTML = "<span style='color: green;'>Respuesta correcta</span>";
            } else {
                incorrectCount++;
                feedbackSpan.innerHTML = `<span style='color: red;'>Respuesta incorrecta. ${explanation}</span>`;
            }
        } else {
            // Para las preguntas de opción múltiple
            const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);
            if (selectedAnswer) {
                if (selectedAnswer.value === correctAnswer) {
                    correctCount++;
                    feedbackSpan.innerHTML = "<span style='color: green;'>Respuesta correcta</span>";
                } else {
                    incorrectCount++;
                    feedbackSpan.innerHTML = `<span style='color: red;'>Respuesta incorrecta. ${explanation}</span>`;
                }
            } else {
                incorrectCount++;
                feedbackSpan.innerHTML = "<span style='color: blue;'>Por favor, selecciona una respuesta</span>";
            }
        }
    }

    // Validar preguntas de opción múltiple
    checkAnswer('q1', 'b', 'feedback-q1', 'Las capas de software facilitan la interacción entre el hardware y las aplicaciones de usuario. <br>Respuesta correcta: b)');
    checkAnswer('q2', 'c', 'feedback-q2', 'El manejador de interrupciones se encarga de gestionar las solicitudes de entrada y salida a nivel de hardware. <br>Respuesta correcta: c)');
    checkAnswer('q3', 'b', 'feedback-q3', 'La función principal del manejador de interrupciones es responder rápidamente a los eventos de hardware. <br>Respuesta correcta: b)');
    checkAnswer('q4', 'b', 'feedback-q4', 'Cuando ocurre una interrupción, el sistema ejecuta el manejador de interrupciones correspondiente. <br>Respuesta correcta: b)');
    checkAnswer('q5', 'b', 'feedback-q5', 'Los controladores de dispositivos traducen las solicitudes de entrada y salida del sistema operativo al hardware. <br>Respuesta correcta: b)');
    checkAnswer('q6', 'a', 'feedback-q6', 'Un controlador de dispositivo puede ser, por ejemplo, un controlador de teclado. <br>Respuesta correcta: a)');
    checkAnswer('q7', 'b', 'feedback-q7', 'El software en modo usuario utiliza llamadas al sistema para realizar operaciones de entrada y salida. <br>Respuesta correcta: b)');
    
    // Validar preguntas de texto
    checkAnswer('q8', 'mayor seguridad y control', 'feedback-q8', 'El uso de llamadas al sistema permite un mayor control y seguridad en las operaciones de entrada y salida. <br>Respuesta correcta: Mayor seguridad y control');
    checkAnswer('q9', 'la falta de acceso directo al hardware', 'feedback-q9', 'El software en modo usuario no tiene acceso directo al hardware, lo que limita algunas operaciones. <br>Respuesta correcta: La falta de acceso directo al hardware');
    checkAnswer('q10', 'se utiliza un controlador de dispositivo', 'feedback-q10', 'Cuando el software en modo usuario solicita entrada y salida, se utiliza un controlador de dispositivo para procesar la solicitud. <br>Respuesta correcta: Se utiliza un controlador de dispositivo');
}
