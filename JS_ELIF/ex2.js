const frm = document.querySelector("form")
const resposta = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const v1 = Number(frm.valor1.value)
    const v2 = Number(frm.valor2.value)
    const v3 = Number(frm.valor3.value)

    const media = (v1 + v2 + v3) / 3

    if (media >= 7){
        resposta.innerText = `Aprovado com média: ${media}`
        resposta.style.color = "blue"
    }
    else if(media >= 4 && media <= 7){
        resposta.innerText = `Recuperação com média: ${media}`
        resposta.style.color = "blue" 
    }
    else{
        resposta.innerText = `Reprovado com média: ${media}`
        resposta.style.color = "blue"
    }
})