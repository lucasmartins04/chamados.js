'use sctrict'

function criarCard (chamado) {

    const card = document.createElement('div')
    card.className = 'card'
    
    const titulo = document.createElement('h3')
    titulo.textContent = chamado.titulo

    const usuario = document.createElement('span')
    usuario.textContent = chamado.usuario

    const prioridade = document.createElement('span')
    prioridade.textContent = chamado.prioridade

    const status = document.createElement('span')
    status.textContent = chamado.status

    card.append(titulo, usuario, prioridade, status)

    return card
}


function carregarchamados() {

    const cards = chamados.map(criarCard)

    const container = document.getElementById('chamados-container')

    container.replaceChildren(...cards)

    
}

function carregarChamadosPorPrioridade(prioridade) {

    const chamadosFiltrados = chamados.filter(chamado=> chamado.prioridade.includes(prioridade))
    
    carregarChamados(chamadosFiltrados)

}

function carregarChamadosPorStatus(status) {
    
    const chamadosFiltrados = chamados.filter(chamado => chamado.status.includes(status))
    
    carregarChamados(chamadosFiltrados)
}

function pesquisarChamado (nome){

    const chamadosFiltrados = chamados.filter(chamado => chamado.usuario.includes (nome))

    carregarChamados(chamadosFiltrados)
}


carregarChamados(chamados)



