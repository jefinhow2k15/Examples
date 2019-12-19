function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Erro, verifique os dados e tente novamente')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')//carregando foto pelo javascript
        img.setAttribute('id', 'foto')//aqui é o mesmo caso que se tivesse criado um nome para o img no html
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'fotomanha.png')
            }else if(idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'fotomanha.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'fotomanha.png')
            }else{
                //idoso
                img.setAttribute('src', 'fotomanha.png')
            }
        }else if(fsex[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'fotonoite.png')
            }else if(idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'fotonoite.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'fotonoite.png')
            }else{
                //idoso
                img.setAttribute('src', 'fotonoite.png')
            }
        }
        res.style.textAlign = 'center'  //alinhando a reposta ao centro usando javascript, poderia ser feito em css
        res.innerHTML = `Detectamos ${genero} de idade ${idade} anos`
        res.appendChild(img)//adiciona um conteudo em baixo do texto de cima, que é um elemento IMG
    }
}