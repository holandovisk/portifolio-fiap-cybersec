





document.querySelector("#qtde").addEventListener("change" , calcularOrcamento)
document.querySelector("#js").addEventListener("change", calcularOrcamento)
document.querySelector("#layout_sim").addEventListener("change", calcularOrcamento)
document.querySelector("#layout_nao").addEventListener("change", calcularOrcamento)
document.querySelector("#prazo").addEventListener("change", calcularOrcamento)

function calcularOrcamento(){
    

    let preco = qtde.value * 100
 
  
  
    let taxadeurgencia = preco * (1.1 - prazo.value * 0.1)

    if(js.checked) preco *= 1.1

    if(layout_sim.checked) preco += 500

    preco +=taxadeurgencia


    
    label_prazo.innerHTML = `Prazo (${prazo.value} semanas)`
    
    console.log(qtde.value)
    
    output.innerHTML = "R$" + preco.toFixed(2)
}
//manipulaçao do dom





//ECMAscript

