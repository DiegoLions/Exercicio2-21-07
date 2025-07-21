const readline = require("readline")
const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

let filmes = []
function exibirMenu(){
    console.log(`
        MENU
        1. Cadastrar filmes
        2. Listar todos os filmes
        3. Editar filmes
        4. Remover filmes cadastrados
        5. Sair
        `)



rl.question('Escolha uma opção:',(opcao) => {
    switch (opcao){
        case '1':
            cadastrarFilme() 
            break
        case '2':
            listarFilmes()
            break
        case '3':
            editarFilme()
            break
        case '4':
            removerFilme()
            break
        case '5':
            rl.close()
            break
            default:
                console.log('Opção inválida, tente novamente.');
                mostrarMenu();
                break
    }
})
}

function cadastrarFilme(){
    rl.question('Digite o nome do filme a ser cadastrado:',(nome)=>{
        rl.question('Digite a categoria do filme:',(categoria)=>{
            rl.question('Digite o ano de lançamento do filme:',(anoDeLancamento)=>{
                

                const filme = {
                    nome,
                    categoria,
                    anoDeLancamento
                };

                filmes.push(filme);
                console.log('Filme cadastrado com sucesso!');
                console.log('Deseja cadastrar outro filme? (sim/não)');

        rl.question('', (resposta) => {
            if(resposta.toLocaleLowerCase() === "sim"){
                cadastrarFilme()
            }else{
                mostrarMenu()
            }
        });
    });
});
});
}


function listarFilmes(){
    if (filmes.length === 0){
        console.log('Nenhum filme cadastrado.')
    } else {
        console.log('n=== LISTA DE FILMES ===');
        filmes.forEach((filme, index) => {
            console.log(
                `${index + 1}- Nome: ${filme.nome}, Categoria: ${filme.categoria}, Ano de Lançamento: ${filme.anoDeLancamento}`
        );
    });
    console.log('\nPressione enter para voltar ao menu principal');
rl.question('',mostrarMenu);
}
}


function editarFilme() {
    if (filmes.length === 0) {
        console.log('Nenhum filme cadastrado para editar.');
        console.log('\nPressione enter para voltar ao menu principal');
return rl.question('',mostrarMenu);
}


console.log('/n=== FILMES CADASTRADOS ===');
filmes.forEach((filme, index) => {
    console.log(
        `${index +1}. Nome: ${filme.nome} | Categoria: ${filme.categoria} | Ano de Lançamento: ${filme.anoDeLancamento}`
    );
});

rl.question('\nDigite o número do filme que deseja editar: ', (num) => {
    const index = parseInt(num, 10) - 1;

    if (index < 0 || index >= filmes.length) {
        console.log('Número inválido!');
        console.log('\n Pressione enter para voltar ao menu principal')
        return rl.question('', mostrarMenu);
    }

    rl.question('Digite o novo nome do filme:', (nome) => {
        rl.question('Digite a nova categoria do filme: ', (categoria) => {
            rl.question('Digite o novo ano de lançamento do filme: ', (anoDeLancamento) => {
                if (anoDeLancamento <= 0 || isNaN(anoDeLancamento)) {
                    console.log('Ano de Lançamento inválido');
                    return editarFilme();
                }


    filmes[index] = {
        nome,
        categoria,
        anoDeLancamento,
    };

    console.log('Filme editado com sucesso!');
    console.log('\nPressione enter para voltar ao menu principal');
    return rl.question('', mostrarMenu);
});
});
});
});
}

function removerFilme() {
if (filmes.length === 0) {
    console.log('Nenhum filme cadastrado para apagar.');
    console.log('\nPressione Enter para voltar ao menu principal')
    return rl.question('', mostrarMenu);
}

console.log('\n=== FILMES CADASTRADOS ===');
filmes.forEach((filme, index) => {
console.log(
    `${index +1}. Nome: ${filme.nome} | Categoria: ${filme.categoria} | Ano de Lançamento: ${filme.anoDeLancamento}`
);
});

rl.question('\nDigite o número do filme que deseja remover: ', (num) => {
    const index = parseInt(num,10) - 1;

    if (index >= 0 && index < filmes.length) {
        const [removido] = filmes.splice(index, 1);
        console.log(`Filme ${removido.nome} foi removido com sucesso!`);
     } else {
        console.log('Número inválido!');
     }

     console.log('\nPressione enter para voltar ao menu principal');
rl.question('',mostrarMenu);
    });
}



 function mostrarMenu() {
    console.log('\n' + '='.repeat(30));
    exibirMenu();
}
mostrarMenu()
