function limpar() {
    document.getElementById("result").value = "";//Define o valor do elemento com id "result" como uma string vazia, limpando a tela
}

function botao(value) { //define a funçao botao com o value como parâmetro
    document.getElementById("result").value += value; //Adiciona o 'value' passado ao final do conteúdo atual do visor
}

function calculate() { 
    const val = document.getElementById("result").value; // Armazena o valor atual do visor na variável 'val'
    const final = eval(val); //Avalia a expressão armazenada em 'val' e armazena o resultado em 'final'
    document.getElementById("result").value = final; //Define o valor do visor como o resultado calculado 'final'
}
