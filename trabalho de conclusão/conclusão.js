let valor = document.querySelector("input#valor")
    let tab = document.querySelector("select#tabela")
    let v1 = []
    

    function inNumero(n){
        if(Number(n.value) >= 1 &&  Number(n.value)<= 100) {
            return true
        }else {
            return false
        }
    }

    function inLista(n,c) {
        if(c.indexOf(Number(n.value)) != -1){
            return true
        }else {
            return false
        }
    }
function adicionar(){
    if (inNumero(valor.value) && !inLista(valor.value, v1)) {
        alert('ok')
    }else{
        alert('temos um problema.')
    }
}

/*
function limpar(){
    let d = document.querySelector("#dados")
    d.innerHTML = `Ao todo foram ${tab.length} cadastrados.`

}
*/