var numero = document.querySelector("#fnum")
var tabela = document.querySelector("#tabela")
var res = document.querySelector("#Dados")
var valor = []

function inValor(n){
    //se o valor "n" foi maior que 1 e menor ou igual a 100, retorna "true"
    if (Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(x, c){
    // Se o valor de "x" estiver dentro de "c" for diferente de "-1" retorna "true"
    if(c.indexOf(Number(x)) != -1){
        return true
    }else{
        return false
    }
}

function Adicionar(){
  
    if (inValor(numero.value) && !inLista(numero.value, valor)){
        //usamos o comando push para acrescentar o valor dentro do vetor.
        valor.push(Number(numero.value))
        let tab = document.createElement("option")
        tab.innerHTML = `Foi adicionado o valor de ${Number(numero.value)}`
        tabela.appendChild(tab)
    }else{
        alert('[ERRO]valor já adicionado, ou, nem um valor foi digitado')
    }
    numero.value = ''
    //Comando focus serve para fazer como se o cursor do mouse estive clicado novamente no local.
    numero.focus() 
    res.innerHTML=""

}

function finalizar(){
    if (valor == ""){
        alert('Não temos valor para finalizar')
    }else{
        valor.sort()
        let t = valor[0]
        let soma = 0
        res.innerHTML = `<p>Ao todo foram adicionado ${valor.length}</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${valor[0]}</p>`
        for (let pos in valor){
            soma += valor[pos]
            if (valor[pos] > t){
                t = valor[pos]
            }
        }
        res.innerHTML+=`<p>O maior valor adicionado foi ${t}</p>`
        res.innerHTML+=`<p>A soma dos valores foi ${soma}</p>`
    }


}