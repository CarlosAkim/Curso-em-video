function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('fotomanha')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
            imagem.src="manha.png"
            msg.innerHTML = `Bom dia, agora é ${hora} Horas.`
            document.body.style.background = "#28941a50"
    }   else if(hora >12 && hora <= 18){
         //Boa tarde
            imagem.src = 'tarde.png'
            msg.innerHTML = `Boa Tarde, agora é ${hora} Horas.`
            document.body.style.background = '#a89b273b'
    }   else {
         //boa noite
            imagem.src = "noite.png"
            msg.innerHTML = `Boa noite, agora é ${hora} Horas`
            document.body.style.background = '#1b20108f'
    }    
}