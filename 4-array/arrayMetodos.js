const pilotos = ['Vettel', 'Alonso', 'Haikkonen', 'Russel']
pilotos.pop() //remove o ultimo item do array
console.log(pilotos);

pilotos.push('Verstappen')// adiciona item no final do array
console.log(pilotos)

pilotos.shift()// remove primeiro item da lista
console.log(pilotos);

pilotos.unshift('Hamilton') // adiciona no primeiro item do array
console.log(pilotos);

// splice pode adicionar e  remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

// remover
pilotos.splice(3, 1) 
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2);