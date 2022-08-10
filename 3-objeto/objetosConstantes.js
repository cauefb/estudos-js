// pessoa aponta 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa);

const opa = {num:123}

opa.num = 122
console.log(opa);

Object.freeze(pessoa) //congela o objeto