function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer, feedbackId, incorrectFeedback) {
        const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);
        const feedbackElement = document.getElementById(feedbackId);

        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswer) {
                correctCount++;
                feedbackElement.innerHTML = '<span style="color: green;">Respuesta correcta</span>';
            } else {
                incorrectCount++;
                feedbackElement.innerHTML = `<span style="color: red;">Respuesta incorrecta. ${incorrectFeedback[selectedAnswer.value]}</span>`;
            }
        } else {
            incorrectCount++;
            feedbackElement.innerHTML = '<span style="color: blue;">Por favor, selecciona una respuesta</span>';
        }
    }

    checkAnswer('q1', 'b', 'feedback-q1', {
        'a': 'La gestión de archivos organiza datos, no gestiona cuotas. <br>Respuesta correcta: b)',
        'c': 'El particionamiento del disco divide el almacenamiento, no gestiona cuotas. <br>Respuesta correcta: b)'
    });

    checkAnswer('q2', 'a', 'feedback-q2', {
        'b': 'La gestión de espacio libre monitorea bloques, no organiza jerarquías. <br>Respuesta correcta: a)',
        'c': 'Los inodos almacenan metadatos, no organizan jerarquías. <br>Respuesta correcta: a)'
    });

    checkAnswer('q3', 'b', 'feedback-q3', {
        'a': 'La tabla de archivos almacena información general, no metadatos específicos. <br>Respuesta correcta: b)',
        'c': 'El sistema de cuotas limita espacio, no almacena metadatos. <br>Respuesta correcta: b)'
    });

    checkAnswer('q4', 'b', 'feedback-q4', {
        'a': 'El árbol de directorios organiza jerarquías, no bloques disponibles. <br>Respuesta correcta: b)',
        'c': 'El control de permisos regula accesos, no bloques disponibles. <br>Respuesta correcta: b)'
    });

    checkAnswer('q5', 'b', 'feedback-q5', {
        'a': 'El árbol de directorios organiza jerarquías, no permisos. <br>Respuesta correcta: b)',
        'c': 'La gestión de cuotas limita espacio, no controla permisos. <br>Respuesta correcta: b)'
    });

    checkAnswer('q6', 'a', 'feedback-q6', {
        'b': 'La gestión de archivos administra datos, no particiones. <br>Respuesta correcta: a)',
        'c': 'La gestión de cuotas limita el uso, no divide discos. <br>Respuesta correcta: a)'
    });

    checkAnswer('q7', 'a', 'feedback-q7', {
        'b': 'Los inodos almacenan metadatos, no organizan jerarquías. <br>Respuesta correcta: a)',
        'c': 'El control de permisos regula accesos, no organiza jerarquías. <br>Respuesta correcta: a)'
    });

    checkAnswer('q8', 'b', 'feedback-q8', {
        'a': 'La gestión de espacio libre monitorea bloques, no cuotas. <br>Respuesta correcta: b)',
        'c': 'El árbol de directorios organiza jerarquías, no cuotas. <br>Respuesta correcta: b)'
    });

    checkAnswer('q9', 'b', 'feedback-q9', {
        'a': 'La gestión de cuotas limita uso, no organiza datos lógicamente. <br>Respuesta correcta: b)',
        'c': 'Los inodos almacenan metadatos, no organizan datos lógicamente. <br>Respuesta correcta: b)'
    });
}
