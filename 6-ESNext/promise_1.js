let p = new Promise(function(resolve) {
    resolve(['Cauê', 'Rafaela', 'Ana', 'Carla'])
})

p.then(function(valor) {
    console.log(valor);
})

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}



const letraMinuscula = letra => letra.toLowerCase()

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)