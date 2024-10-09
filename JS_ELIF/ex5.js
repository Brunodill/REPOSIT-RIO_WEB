const frm = document.querySelector("form");
const resposta = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const peso = Number(frm.peso.value);
    const altura = Number(frm.altura.value);

    const imc = peso / (altura * altura);

    if (imc < 18.5) {
        resposta.innerText = "Baixo peso";
    } else if (imc < 24.9) {
        resposta.innerText = "Peso normal";
    } else if (imc < 29.9) {
        resposta.innerText = "Sobrepeso";
    } else {
        resposta.innerText = "Obesidade";
    }
});
