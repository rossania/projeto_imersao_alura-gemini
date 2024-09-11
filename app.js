function pesquisar() {
    let section = document.getElementById("resultado_pesquisa");
    let campoBusca = document.getElementById("campo_busca").value

    if (!campoBusca) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um profissional ou endereço.</p>"
        return
    }

    campoBusca = campoBusca.toLowerCase()


    let resultados = "";
    let titulo = "";
    let endereco = "";
    let contato = "";
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        endereco = dado.endereco.toLowerCase()
        contato = dado.contato.toLowerCase()
        if (titulo.includes(campoBusca) || endereco.includes(campoBusca) || contato.includes(campoBusca)){
            resultados += `
                <div class="resultado_gerado">
                    <p>${dado.titulo}</p>
                
                    <ul>
                        <li>${dado.endereco}</li>
                        <li>${dado.contato}</li>
                    </ul>
                </div>
    
            `;
        }

    }
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    section.innerHTML = resultados;
    section.classList.add('resultados-ativos');
}

