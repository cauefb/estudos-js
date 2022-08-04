const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('C')) //procura a posicao do caractere informado retorna -1 se o caractere informado não for localizado

console.log(escola.substring(2))//imprime apartir do caratere informado
console.log(escola.substring(0,3))//imprime o range de caracteres escolhidos 

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))//transforma em um array
console.log()