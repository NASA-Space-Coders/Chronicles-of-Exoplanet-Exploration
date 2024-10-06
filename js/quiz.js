function calcularAcertos() {
    const quizForm = document.getElementById('quiz-form');
    const voltar = document.querySelector("#voltar");
    voltar.style.display = "block"
    let acertos = 0;

    const respostas = {
        q1: "certo",
        q2: "certo",
        q3: "certo",
        q4: "certo"
    };

    for (let pergunta in respostas) {
        const userAnswer = quizForm[pergunta].value;
        if (userAnswer === respostas[pergunta]) {
            acertos++;
        }
    }

    const resultado = document.getElementById('resultado');
    resultado.textContent = `Você acertou ${acertos} de ${Object.keys(respostas).length} perguntas!`;
}