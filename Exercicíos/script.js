function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txt')
    var res = document.querySelector('div#foto')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] tem algo errado ai...')   
    } else{
        var fsex = document.getElementsByName('radmax')
        var idade = ano - Number(fano.value) // abriu o number pois o valor que digitar vira numero.
        var genero = ''
        var img = document.createElement('img')//criamos um elemento, no caso foi a imagem.
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade>=0 && idade<=10){
                //criança
                img.setAttribute('src','bebe menino .png')
            }else if(idade<=21){
                //adolecente
                img.setAttribute('src','adolecente homem.png')
            }else if(idade<=50){
                //adulto
                img.setAttribute('src','homem.png')
            }else{
                //idoso
                img.setAttribute('src','idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade<=10){
                //criança
                img.setAttribute('src','bebe menina.png')
            }else if(idade<=21){
                //adolecente
                img.setAttribute('src','adolecente mulher.png')
            }else if(idade<=50){
                //adulto
                img.setAttribute('src','mulher.png')
            }else{
                //idoso
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = "center" // textalign deixa o texto no centro.
        res.innerHTML = `O seu genero é ${genero}, e sua idade calculada ${idade}`
        res.appendChild(img) 
        //Função appendChild foi o comando para mostrar a imagem na tela.
    }

}   