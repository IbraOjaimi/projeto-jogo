const prompt = require('prompt-sync')();

const jogos = []

const criar = () => {
    const nome = prompt('Nome do jogo: ');
    const anoLancamento = prompt('Ano de lançamento: ')
    const duracao = prompt('Duração média em horas: ')
    const preco = prompt('Preço: ')
    const estudio = prompt('Estudio do jogo: ')
    const sequencia = prompt('Sequência do jogo: ')

    if(
        nome != '' &&
        anoLancamento >= 1962 && anoLancamento <= 2024 &&
        duracao > 0 &&
        preco == 0 &&
        estudio != '' &&
        ((sequnencia > 0 && sequnencia < jogos.length) || jogos.length == 0)
    ) {
        jogos.push({
            nome,
            anoLancamento,
            duracao,
            estudio,
            sequencia,
        });

        console.log('Jogo cadastrado com sucesso!')
    } else {
        console.log('Dados invalidos!')
    }
}