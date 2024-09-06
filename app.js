function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Imprime a seção no console para verificação (pode ser removido em produção)
    // console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // console.log(campoPesquisa)

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre os dados e cria o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="https://www.instagram.com/rayssalealsk8/" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }

    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"

    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}

// console.log(dados);



