function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer) {
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

    checkAnswer('q1', 'c');
    checkAnswer('q2', 'a');
    checkAnswer('q3', 'b');
    checkAnswer('q4', 'c');
    checkAnswer('q5', 'a');
    checkAnswer('q6', 'a');
    checkAnswer('q7', 'b');
    checkAnswer('q8', 'a');
    checkAnswer('q9', 'b');

    const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    alert(resultMessage);
}
