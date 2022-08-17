const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista:true},
    {nome: 'Pedro', nota:9.8 , bolsista:false},
    {nome: 'Ana', nota:8.7 , bolsista:true},
]
console.log(alunos.map(a => a.nota)); //retorna array com as notas
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10) //<- passando valor 10 como inicial

console.log(resultado);

const arr = [5,5,2,7]

const res = arr.reduce((acc, act)=>{
    return acc+ act
})

console.log(res);