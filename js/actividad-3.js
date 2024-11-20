function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer) {
        if (questionName === 'q8' || questionName === 'q9' || questionName === 'q10') {
            const textAnswer = document.querySelector(`input[name=${questionName}]`).value.trim();
            if (textAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        } else {
            const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);
            if (selectedAnswer) {
                if (selectedAnswer.value === correctAnswer) {
                    correctCount++;
                } else {
                    incorrectCount++;
                }
            } else {
                incorrectCount++;
            }
        }
    }

    // Check answers for radio button questions
    checkAnswer('q1', 'd');
    checkAnswer('q2', 'a');
    checkAnswer('q3', 'c');
    checkAnswer('q4', 'c');
    checkAnswer('q5', 'b');
    checkAnswer('q6', 'a');
    checkAnswer('q7', 'b');

    // Check answer for text input question
    checkAnswer('q8', 'asociar páginas virtuales a los marcos de página');
    checkAnswer('q9', 'el número de página virtual es un argumento y el número de marco físico es un resultado');
    checkAnswer('q10', 'en un sistema de multiprogramación, con bits y partes de muchos programas en memoria a la vez');

    checkAnswer('q11', 'v');

    const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    alert(resultMessage);
}
