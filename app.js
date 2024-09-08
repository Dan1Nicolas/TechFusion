// FIAP script

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = '<p style="color: #ed145b;">Curso não encontrado</p>'
        return
    }


    campoPesquisa = campoPesquisa.toUpperCase()

    
    let resultados = ""
    let titulo = ""
    let descricao = ""
    let tags = ""

    for (let curso of cursosFiap) {
        titulo = curso.titulo.toUpperCase()
        descricao = curso.descricao.toUpperCase()
        tags = curso.tags.toUpperCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                        <h2>
                            <a href="https://www.fiap.com.br/graduacao/tecnologo/game-development/" style="color: #acc1cc;">
                                ${curso.titulo}
                            </a>
                        </h2>
                        <h3>${curso.subtitulo}</h3>
                        <h4>${curso.duracao}</h4>
                        <p class="descricao-meta">
                            ${curso.descricao}
                        </p>
                        <a href=${curso.link} style="color: #ed145b;" target="_blank">
                            Mais informações
                        </a>
                </div>
            `
        }
    };

    if (!resultados) {
        resultados = '<p style="color: #ed145b;">Curso não existente</p>'
    }

section.innerHTML = resultados;
}

// FIAP script