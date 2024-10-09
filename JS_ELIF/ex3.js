const frm = document.querySelector("form");
const resposta = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const lado1 = Number(document.getElementById("valor1").value);
    const lado2 = Number(document.getElementById("valor2").value);
    const lado3 = Number(document.getElementById("valor3").value);

    // Verificar se é um triângulo válido
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        let tipo = "";

        if (lado1 === lado2 && lado2 === lado3) {
            tipo = "Equilátero";
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            tipo = "Isósceles";
        } else {
            tipo = "Escaleno";
        }

        resposta.innerText = `É ${tipo}`;
    } else {
        resposta.innerText = "Não formam um triângulo válido.";
    }
});
