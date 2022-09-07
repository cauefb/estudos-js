const { map, set } = require("lodash");

for (const letra of "Cauê") {
    console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promisse']

for (let i in assuntosEcma) {
    console.log(i);
}

for (let assunto of assuntosEcma) {
    console.log(assunto);
}

const assuntosMap = new Map([
    ['map',{abordado: true}],
    ['Set',{abordado: true}],
    ['Promisse',{abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto);
}

for (let chave of assuntosMap.keys()) {
    console.log(chave);
}

for ( valor of assuntosMap.values()){
    console.log(valor);
}

for (let [ch,vl] of assuntosMap.entries()) {
    console.log(ch,vl);
}

const s = new set(['a', 'b', 'c'])
for ( let letra of s) {
    console.log(letra);
}