function calcularAcertos() {
    const quizForm = document.getElementById('quiz-form');
    let acertos = 0;

    // Verifica a resposta de cada pergunta
    const respostas = {
        q1: "certo",
        q2: "certo",
        q3: "certo",
        q4: "certo"
    };

    // Percorre as respostas do quiz
    for (let pergunta in respostas) {
        const userAnswer = quizForm[pergunta].value;
        if (userAnswer === respostas[pergunta]) {
            acertos++;
        }
    }

    // Exibe o resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Você acertou ${acertos} de ${Object.keys(respostas).length} perguntas!`;
}
