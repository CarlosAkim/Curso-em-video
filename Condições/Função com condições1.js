function parImpar(n){
    if (n%2==0){
        return 'par'
    }else {
        return 'impar'
    }
}

var teste = parImpar(11)
console.log(teste)

// também se pode usar outra forma.

function parImpar2(n){
    if(n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}

console.log(parImpar2(11))