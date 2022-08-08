const pessoa = {
    suadacao: 'Bom dia!',
    falar() {
        console.log(this.suadacao);
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()// conflito entre paradigmas: funcional e OO

const falardePessoa = pessoa.falar.bind(pessoa)
falardePessoa()