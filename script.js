const botoes = document.querySelectorAll(".filtro");
const produtos = document.querySelectorAll(".produto");

botoes.forEach(function(botao) {
  botao.addEventListener("click", function() {

    botoes.forEach(function(item) {
      item.classList.remove("ativo");
    });

    botao.classList.add("ativo");

    const categoria = botao.textContent.trim();

    produtos.forEach(function(produto) {

      const categoriaProduto = produto.dataset.categoria;

      if (categoria === "Todos" || categoriaProduto === categoria) {
        produto.style.display = "block";
      } else {
        produto.style.display = "none";
      }

    });

  });
});
