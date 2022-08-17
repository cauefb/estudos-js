Array.prototype.forEach2 = function(callback){
    for (let index = 0; index < this.length; index++) {      
        callback(this[index], index, this)
    }
} 


const aprovados = ['agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice +1}) ${nome}`);
})

