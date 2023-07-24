function verificar(){
   let iniciar = document.querySelector("#inicio")
   let terminar = document.querySelector("#termino")
   let passo = document.querySelector("#passo")
   let res = document.querySelector("#txt")


   if (iniciar.value.length == 0 || terminar.value.length == 0 ){
    res.innerHTML = "erro"
   }else{
        let i = Number(iniciar.value)
        let t = Number(terminar.value)
        let p = Number(passo.value)
        res.innerHTML = 'Contando:'
        if(p == " "){
            alert('[ERRO] Passo 0, considerando Passo = 1')
            p=1
        }
        if (i<t){
            //contagem crescente
            for (let c = i; c<= t; c+=p){
                res.innerHTML+= ` ${c} `
            }   
        }else{
            //contagem decrescente
            for (let c = i; c>= t; c-=p){
                res.innerHTML+= ` ${c} `
            }
        }
        res.innerHTML +=`\u{1F4AA}`    
   }   
}