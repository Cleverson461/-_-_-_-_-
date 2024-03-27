let produtos = [];

function cadastrarProduto() {
    const nome = document.getElementById("nome").value;
    const descricao = document.getElementById("descricao").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const disponivel = document.getElementById("disponivel").value;

    const produto = {
        nome: nome,
        descricao: descricao,
        valor: valor,
        disponivel: disponivel
    };

    produtos.push(produto);
    produtos.sort((a, b) => a.valor - b.valor);

    exibirProdutos();
}

function exibirProdutos() {
    const corpoTabela = document.getElementById("corpoTabela");
    corpoTabela.innerHTML = "";

    produtos.forEach(produto => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.valor}</td>
        `;
        corpoTabela.appendChild(row);
    });
}
