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

    checkAnswer('q1', 'a');
    checkAnswer('q2', 'b');
    checkAnswer('q3', 'c');
    checkAnswer('q4', 'd');
    checkAnswer('q5', 'a');
    checkAnswer('q6', 'd');
    checkAnswer('q7', 'a');
    checkAnswer('q8', 'c');
    checkAnswer('q9', 'c');

    const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    alert(resultMessage);
}
