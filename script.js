function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)    
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('style', 'border-radius:100%;')
        if (fsex[0].checked) {
            gênero = 'Homem'     
            
            if(idade <=3){
                //Bebê
                img.setAttribute('src', '_imagens/bebe_homem.jpg')
            } else if (idade >3 && idade <=10){
                //criança
                img.setAttribute('src', '_imagens/crianca_homem.jpg')
            } else if (idade > 10 && idade <=17){
                // adolescente
                img.setAttribute('src', '_imagens/jov_ado_homem.jpg')
            } else if ( idade >= 18 && idade <=25 ){
                //Jovem adulto
                img.setAttribute('src', '_imagens/jovem_homem.jpg')
            } else if(idade >25 && idade <= 45){
                //adulto
                img.setAttribute('src', '_imagens/adulto_homem.jpg')
            } else if (idade > 45 && idade <= 59){
                //jovem senhor
                img.setAttribute('src', '_imagens/jovem_senhor.jpg')
            } else {
                //velho
                img.setAttribute('src','_imagens/velho_homem.jpg')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            
            if(idade <=3){
                //Bebê
                img.setAttribute('src', '_imagens/bebe_mulher.jpg')
            } else if (idade >3 && idade <=10){
                //criança
                img.setAttribute('src', '_imagens/crianca_mulher.jpg')
            } else if (idade > 10 && idade <=17){
                // adolescente
                img.setAttribute('src', '_imagens/jov_ado_mulher.jpg')
            } else if ( idade >= 18 && idade <=25 ){
                //Jovem adulto
                img.setAttribute('src', '_imagens/jovem_mulher.jpg')
            } else if(idade >25 && idade <= 45){
                //adulto
                img.setAttribute('src', '_imagens/adulto_mulher.jpg')
            } else if (idade > 45 && idade <= 59){
                //jovem senhor
                img.setAttribute('src', '_imagens/jovem_senhora.jpg')
            } else {
                //velho
                img.setAttribute('src','_imagens/velha_mulher.jpg')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos. <br>`
        res.appendChild(img)
    }


}