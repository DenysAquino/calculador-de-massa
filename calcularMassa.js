     //imc (Indice de massa corporal )= P (peso-KG) / A (altura²).
     function calcular () {
        let img = document.getElementById('imagem')
        let peso1 = document.getElementById('peso')
        let altura1 = document.getElementById('altura')
        let res = document.getElementById('res')
        let p = Number(peso.value)
        let a = Number(altura.value)
        let imc = p / (a * a)
        let imcTratado = imc.toFixed(2)
        //res.innerHTML = `Olá, com base na sua altura de ${a} e peso de ${p} definimos que seu IMC é de ${imcTratado}`
        if (imcTratado < 18.5) {
            img.src = "magrezaextrema.png"
            res.innerHTML = `Olá, com base na sua altura de ${a} e peso de ${p} definimos que seu IMC é de ${imcTratado}.<br><strong> Você está no grupo de "Magreza" segundo a OMS, o sugerido é que busque acompanhamento Médico!</strong>`
        }else if (imcTratado >= 18.5 && imcTratado < 24.99) {
            img.src = "saudavel.png"
            res.innerHTML = `Olá, com base na sua altura de ${a} e peso de ${p} definimos que seu IMC é de ${imcTratado}.<br><strong> Você está no grupo de pessoas "Saudavéis" segundo a OMS, Parabéns!</strong>`
        }else if (imcTratado >= 25 && imcTratado < 29.99) {
            img.src = "sobrepeso.png"
            res.innerHTML = `Olá, com base na sua altura de ${a} e peso de ${p} definimos que seu IMC é de ${imcTratado}.<br><strong> Você está no grupo de pessoas com "Sobrepeso" segundo a OMS, Fique atento!</strong>`
        }else if (imcTratado >= 30 && imcTratado < 34.99) {
            img.src = "obesidade1.png"
            res.innerHTML = `Olá, com base na sua altura de ${a} e peso de ${p} definimos que seu IMC é de ${imcTratado}.<br><strong>" Você está no grupo de pessoas com Obesidade grau I", segundo a OMS deve praticar exercicíos fisicos e visitar um nutricionista para acompanhamento.</strong> Se cuide!`
        }else if (imcTratado >= 35 && imcTratado < 39.99) {
            img.src = "obesidade2.png"
            res.innerHTML = `Olá, com base na sua altura de ${a} e peso de ${p} definimos que seu IMC é de ${imcTratado}.<br><strong> Você está no grupo de pessoas com "Obesidade grau II ", segundo a OMS deve praticar exercicíos fisicos e visitar um médico para acompanhamento.</strong> Se cuide!`
        }else if (imcTratado > 40) {
            img.src = "obesidade3.png"
            res.innerHTML = `Olá, com base na sua altura de ${a} e peso de ${p} definimos que seu IMC é de ${imcTratado}.<br><strong> Você está no grupo de pessoas com "Obesidade grau III - morbida", segundo a OMS deve praticar exercicíos fisicos e visitar um médico o quanto antes. A cormobidade é muito perigosa, se cuide.</strong> Levante da cadeira e vá logo :( !`
        }else {
            res.innerHTML = ` <strong>Valor inválido tente novamente</strong>`
        }
    }
