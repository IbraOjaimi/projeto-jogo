const prompt = require('prompt-sync')();

const jogos = [];

const validarIndice = indice => indice >= 0 && indice < jogos.length;

const modelo = () => {
    const nome = prompt('Nome do jogo: ');
    const anoLancamento = prompt('Ano de lançamento: ');
    const duracao = prompt('Duração média em horas: ');
    const preco = prompt('Preço: ');
    const estudio = prompt('Qual o estudio do jogo? ');

    let sequencia = -1
    if (listar()) {
        sequencia = prompt('Qual a sequência do jogo? Digite 0 se não houver! ') - 1;
    }

    if(
        nome != '' &&
        anoLancamento >= 1962 && anoLancamento <= 2024 &&
        duracao > 0 &&
        preco == 0 &&
        estudio != '' &&
        ((sequnencia >= -1 && sequnencia < jogos.length) || jogos.length == 0)
    ) {
        return {
            nome,
            anoLancamento,
            duracao,
            estudio,
            sequencia,
        };
    } else {
    console.log('Dados invalidos!');
    }
};

const criar = () => {
    const jogo = modelo();
    if (jogo != undefined) {
        jogos.push();
        console.log('Jogo cadastrado com sucesso!');
    }
};

const listar = () => {
    if(jogos.length == 0) {
        console.log('Nenhum jogo cadastrado!');
        return false;

    } else {
        jogos.forEach((jogo, indice)=> {
            console.log(`
            ${indice + 1}.
            Nome: ${jogo.anoLancamento}
            Duração: ${jogo.duracao}
            Preço: ${jogo.preco}
            Estudio: ${jogo.estudio}
            Sequência: ${jogo.sequencia}
            `)
        });
    
        return true;
    }
};

const atualizar = () => {
    listar();
    if  (!listar()) {
        return;
    }

    const indice = prompt('Qual o indice que deseja atualizar?') - 1;
    
    const jogo = modelo();
    
    if (jogo != undefined && validarIndice(indice)) {
        jogos[indice] = jogo
        console.log('Jogo atualizado com sucesso!');
    } else {
        console.log('Dados ou indice inválido!')
    }
};

const remover = () => {
    listar();
    if  (!listar()) {
        return;
    }

    const indice = prompt('Qual o indice que deseja remover?') - 1;

    if(validarIndice(indice)) {
        jogos.splice(indice, 1);
        console.log('Jogo removido com sucesso!');
    } else {
        console.log('Falha na remoção!');
    }
}