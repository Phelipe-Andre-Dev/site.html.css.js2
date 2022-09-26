function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert (`Verifique os dados e tente novamente`)
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked){
            gênero = 'Homem'
        
            if(idade == 0 && idade < 10){
                //criança
            } else if (idade < 21){
                //jovem
            } else if (idade < 50){
                //adulto

            } else {
                //idoso
            }

        } else if (fsex[1].checked){
            gênero = 'Mulher'
            
            if (idade == 0 && idade < 10){
                //criança
            }else if (idade < 21){
                //jovem

            }else if (idade < 50){
                //adulto

            }else{
                //idoso
            }

       


        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos ! `
            
    }
}