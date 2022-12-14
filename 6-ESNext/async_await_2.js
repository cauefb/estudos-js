function gerarnumerosEntre(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max]
    

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject('Numero repetido!')
            } else {

                resolve(aleatorio)
            }
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try{
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()){
           numeros.push( await gerarnumerosEntre(1,60, numeros))
        }
        return numeros
    } catch(e){
        if(tentativas > 10){
            throw "Que chato"
        } else {
        gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }

}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)



// gerarnumerosEntre(1,5, [1,2,4])
//     .then(console.log)
//     .catch(console.log)