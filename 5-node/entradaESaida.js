const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo) {
    process.stdout.write("Fala Anônimo \n")
} else {
    process.stdout.write('Infomro seu nome: ')
    process.stdin.on('data' , data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Falaaa ${nome}\n`)
        process.exit()
    })
}