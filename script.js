const listaProdutos = document.getElementById("lista-produtos");
const botoes = document.querySelectorAll(".filtro");

function mostrarProdutos(categoria) {
  listaProdutos.innerHTML = "";

  produtos.forEach(function(produto) {

    if (categoria === "Todos" || produto.categoria === categoria) {

      const card = document.createElement("div");

      card.className = "produto";

      card.innerHTML = `
        <h3>${produto.nome}</h3>

        <img
          src="${produto.imagem}"
          alt="${produto.nome}"
        >

        <p>${produto.descricao}</p>

        <p>
          <strong>${produto.preco}</strong>
        </p>
      `;

      listaProdutos.appendChild(card);
    }

  });
}


botoes.forEach(function(botao) {

  botao.addEventListener("click", function(event) {

    event.preventDefault();

    botoes.forEach(function(item) {
      item.classList.remove("ativo");
    });

    botao.classList.add("ativo");

    const categoriaSelecionada = botao.textContent.trim();

    mostrarProdutos(categoriaSelecionada);

  });

});


mostrarProdutos("Todos");
