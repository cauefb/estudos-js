function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (error) {
            reject(erro)
        }
        
    })
}

funcionarOuNao('Testando...', 0.9)
    .then( v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro Esp.: ${err}`)

    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))
