// usando numero, pode se colocar dentro direto.
let numero = [5,4,7,2,1]


//aqui em baixo acrescentamos mas um valor dentro do vetor.
numero[5]= 8


// Também se pode usar o comando "push", que acrescenta um valor na ultima posição do vetor
numero.push(7)


// Também podemos usar o atribuido "sort()" para que coloque em ordem os numeros dentro do vetor.
numero.sort()
// Também pode usar o atributo length para fazer a contagem dentro do vetor e fica assim ...
console.log(`Vamos ver como ficar esse teste, o vetor tem ${numero.length} dentro.`)
//console.log(`Dentro do nosso vetor temos ${numero}`)


/*
for(let pos=0; pos< numero.length;pos++){
    console.log(`As posiçãoes ${pos} tem os valores de ${numero[pos]}`)
}
*/

//Uma forma de Buscar algum valor dentro do vetor...
let cont = numero.indexOf(45)
if (cont == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(numero)
    console.log(`O valor está na posição de ${cont}`)
    
}

//________________________________________________________________________________________________
//Outra forma de fazer o for para objetos...

/*for (let pos in numero){
    console.log(numero[pos])
}
*/


/*Usando string, se coloca dentro de aspas...
/let nome = ['Carlos, Eduardo, Maria, José']


console.log(`Oque tem dentro do nosso vetor é ${numero}`)
*/