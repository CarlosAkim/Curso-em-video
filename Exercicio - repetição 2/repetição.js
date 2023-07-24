function Verificar(){
    let num = document.querySelector("#numero")
    let tab = document.querySelector("#tab")
    
    if (num.value.length == 0){
        window.alert('[ERRO] Digite um valor ')

    }else{
        let n = Number(num.value)
        // O comando abaixo, serve para zerar a tabela, ou algo.
        tab.innerHTML = " "
        for (let c = 1; c<=10; c+=1){
            // o Comando abaixo, usamos para criar um menu de opções
            let item = document.createElement('option')
            item.text = ` ${n} x ${c} = ${n*c}`
            //O comando abaixo serve para identificar as opções, tem mas utilizadade no php
            item.value = `tab${c}`
            //comando abaixo foi usado para criar um menu de opções dentro de outro.
            tab.appendChild(item)

            
        }
    }
}