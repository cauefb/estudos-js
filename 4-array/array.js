console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados);
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);


aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8]=== undefined)

console.log(aprovados);
aprovados.sort()
console.log(aprovados);

delete aprovados[1]
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos' , 'Ana']
aprovados.splice(1, 2,'Elemento1', 'elemento2') //primeiro parametro indice segundo parametro qunatidade de elementos a ser excluido
console.log(aprovados)