const frm = document.querySelector("form");
const resposta = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const idade = Number(frm.inIdade.value)

    if(idade >= 18){
        resposta.innerText = `maior de idade`
    }
    else{
        resposta.innerText = `menor de idade`
    }

})