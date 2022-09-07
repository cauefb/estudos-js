function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando Promise...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promisse...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retorarValorRapido(){
    return 20
}

async function executar() {
    let valor = await retornarValor()

    await  esperarPor(2000)
    console.log(`Async/Await ${valor}...`);
    
    await  esperarPor(2000)
    console.log(`Async/Await ${valor +1}...`);

    await  esperarPor(2000)
    console.log(`Async/Await ${valor +2}...`);

    return + 3

}    

//executar().then(console.log)

async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor);
}

executarDeVerdade();