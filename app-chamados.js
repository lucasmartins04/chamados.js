'use strict'

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


function carregarChamados(chamados) {

    const cards = chamados.map(criarCard) 

    const container = document.getElementById('chamados-container')

    container.replaceChildren(...cards)

}

/*filtrar pela prioridade*/

function carregarChamadosPorPrioridade(prioridade) {

    const chamadosFiltrados = chamados.filter(
        chamado => chamado.prioridade.includes(prioridade)
    )

    carregarChamados(chamadosFiltrados)
}

/*filtrar por status */

function carregarChamadosPorStatus(status) {

    const chamadosFiltrados = chamados.filter(
        chamado => chamado.status.includes(status)
    )

    carregarChamados(chamadosFiltrados)
}

function carregarChamadosPorPrioridadeEStatus(prioridade, status) {

    const chamadosFiltrados = chamados.filter(
        chamado => chamado.prioridade.includes(prioridade)
        && chamado.status.includes(status)
    )

    carregarChamados(chamadosFiltrados)
}

const prioridadeStatus = document.getElementById('prioridade-status')

const statusPrioridade = document.getElementById('status-prioridade')

const botaoFiltrar = document.getElementById('filtrar')


botaoFiltrar.onclick = () => {

    const prioridade = prioridadeStatus.value

    const status = statusPrioridade.value

    carregarChamadosPorPrioridadeEStatus(prioridade, status)
}

/* pesquisar pelo nome */

function pesquisarChamado(nome) {

    const chamadosFiltrados = chamados.filter(
        chamado => chamado.usuario.includes(nome)
    )

    carregarChamados(chamadosFiltrados)
}

const botaoPesquisar = document.getElementById('pesquisar')

botaoPesquisar.onclick = () => {

    const nome = document.getElementById('pesquisa').value

    pesquisarChamado(nome)
}

/*filtrar por status */

const botaoAberto = document.getElementById('aberto')

botaoAberto.onclick = () => carregarChamadosPorStatus('Aberto')


const botaoProgresso = document.getElementById('progresso')

botaoProgresso.onclick = () => carregarChamadosPorStatus('Em progresso')


const botaoFechado = document.getElementById('fechado')

botaoFechado.onclick = () => carregarChamadosPorStatus('Fechado')


/*filtrar pela prioridade*/

const botaoAlta = document.getElementById('alta')

botaoAlta.onclick = () => carregarChamadosPorPrioridade('Alta')

const botaoMedia = document.getElementById('media')

botaoMedia.onclick = () => carregarChamadosPorPrioridade('Média')

const botaoBaixa = document.getElementById('baixa')
botaoBaixa.onclick = () => carregarChamadosPorPrioridade('Baixa')

const botaoCritica = document.getElementById('critica')
botaoCritica.onclick = () => carregarChamadosPorPrioridade('Crítica')  

const botaoTodas = document.getElementById('todas')

botaoTodas.onclick = () => carregarChamados(chamados)


carregarChamados(chamados)





