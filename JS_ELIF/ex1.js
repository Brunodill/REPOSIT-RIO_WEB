const frm = document.querySelector("form")
const resposta = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumber.value)

    if(num % 2 ){
        resposta.innerText = `Numero impar ${num}`
    }
    else{
        resposta.innerText = `Numero par ${num}`
    }

})