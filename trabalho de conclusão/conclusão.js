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
}

function finalizar(){
    if (valor == ""){
        alert('Não temos valor para finalizar')
    }else{
        valor.sort()
        res.innerHTML = `Ao todo foram adicionado ${valor.length}`
        res.innerHTML = `O menor valor adicionado foi ${valor[0]}`
        for (var pos in valor){
            pos+=valor[pos]
        }
        alert(pos)
    }


}