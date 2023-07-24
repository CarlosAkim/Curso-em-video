var agora = new Date()
// comando .getDay() serve para pegar o dia da semana.
var diaSem = agora.getDay()


switch(diaSem){ //tem que lembrar de abrir e fechar conchetes, se não não funciona
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('Deu errado esta merda!')
}