const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__); // apartir de proto consigo acessar o prototipo do objeto pai
console.log(ferrari.__proto__ === Object.prototype);// represento o object.prototype
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);// testa se o object.prototype existe um prototipo acima dele na hieraruia. Não possui, retorna null

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);

console.log('----------------------------');

const meuArray = [1,2,3,'a']
console.log(meuArray.__proto__);
console.log(Object.keys(Array.prototype));