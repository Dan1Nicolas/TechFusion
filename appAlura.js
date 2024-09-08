// ALURA script

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa-alura")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = '<p style="color: #D7F9FF;">Curso não encontrado. dígite o curso desejado</p>'
        return
    }

    campoPesquisa = campoPesquisa.toUpperCase()

    
    let resultadosAlura = ""
    let titulo = ""
    let descricao = ""
    let tags = ""

    for (let cursoAlura of cursosAlura) {
        titulo = cursoAlura.titulo.toUpperCase()
        descricao = cursoAlura.descricao.toUpperCase()
        tags = cursoAlura.tags.toUpperCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultadosAlura += `
                <div class="item-resultado">
                        <h2>
                            <a href="https://www.alura.com.br/escola-front-end" style="color: #D7F9FF;">
                                ${cursoAlura.titulo}
                            </a>
                        </h2>
                        <h3>${cursoAlura.subtitulo}</h3>
                        <p class="descricao-meta">
                            ${cursoAlura.descricao}
                        </p>
                        <a href=${cursoAlura.link} style="color:#2BFDBE;" target="_blank">
                            Mais informações
                        </a>
                </div>
            `
        }
    }

    if (!resultadosAlura) {
        resultadosAlura = '<p style="color: #D7F9FF;">Curso não existente</p>'
    }

    section.innerHTML = resultadosAlura
}

// ALURA script