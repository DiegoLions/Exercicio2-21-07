const readline = require("readline")
const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})
exibirMenu()

let funcionarios = []
function exibirMenu(){
    console.log(`
        Menu:
        1. Cadastrar funcionário
        2. Listar todos os funcionários
        3. Apagar um funcionário
        4. Sair
        `)

rl.question('Escolha uma opção:',(opcao)=>{
    switch (opcao){
        case '1':
            cadastrarFuncionario() 
            break
        case '2':
            listarFuncionarios()
            break
        case '3':
         deletarFuncionario()
            break
        case '4':
            rl.close()
            break
            default:
                console.log('Opção inválida, tente novamente.')
                exibirMenu()
                break
    }
})
}

function cadastrarFuncionario(){
    rl.question('Digite o nome do funcionário:',(nome)=>{
        rl.question('Digite o cargo do funcionário:',(cargo)=>{
            rl.question('Digite o salário do funcionário:',(salario)=>{
                funcionarios.push({nomeFuncionario:nome, cargoFuncionario:cargo, salario:salario})
                console.log('Funcionário cadastrado com sucesso!')
                exibirMenu()
    })
})
})
}

function listarFuncionarios(){
    if (funcionarios.length === 0){
        console.log('Nenhum funcionário cadastrado.')
    }else{
        console.log('Lista de Funcionários:')
        funcionarios.forEach((funcionario, index) =>{
            console.log(`${index + 1}).Nome: ${funcionario.nome}, Cargo: $(funcionario.cargo}, Salário: R$${funcionario.salario.toFixed(2)}`)
    })
}
exibirMenu()
}
    
    





