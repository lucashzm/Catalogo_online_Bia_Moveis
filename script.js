const listaProdutos = document.getElementById("lista-produtos");
const botoes = document.querySelectorAll(".filtro");
const paginacao = document.getElementById("paginacao");

const modal = document.getElementById("modal-produto");
const fecharModal = document.getElementById("fechar-modal");
const modalNome = document.getElementById("modal-nome");
const modalImagem = document.getElementById("modal-imagem");
const modalDescricao = document.getElementById("modal-descricao");
const modalPreco = document.getElementById("modal-preco");

const NUMERO_WHATSAPP = "5521983531564";
const modalWhatsapp = document.getElementById("modal-whatsapp");

const PRODUTOS_POR_PAGINA = 30;

let categoriaAtual = "Todos";
let paginaAtual = 1;


function mostrarProdutos(categoria, pagina = 1) {

  categoriaAtual = categoria;
  paginaAtual = pagina;

  listaProdutos.innerHTML = "";

  const produtosFiltrados = produtos.filter(function(produto) {
    return categoria === "Todos" || produto.categoria === categoria;
  });

  const inicio = (pagina - 1) * PRODUTOS_POR_PAGINA;
  const fim = inicio + PRODUTOS_POR_PAGINA;

  const produtosDaPagina = produtosFiltrados.slice(inicio, fim);

  produtosDaPagina.forEach(function(produto) {

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

    card.addEventListener("click", function() {
      abrirModal(produto);
    });

    listaProdutos.appendChild(card);
  });

  criarPaginacao(produtosFiltrados.length);
}


function criarPaginacao(totalProdutos) {

  paginacao.innerHTML = "";

  const totalPaginas = Math.ceil(
    totalProdutos / PRODUTOS_POR_PAGINA
  );

  if (totalPaginas <= 1) {
    return;
  }


  if (paginaAtual > 1) {

    const anterior = document.createElement("button");

    anterior.textContent = "Anterior";

    anterior.addEventListener("click", function() {
      mostrarProdutos(categoriaAtual, paginaAtual - 1);
    });

    paginacao.appendChild(anterior);
  }


  for (let pagina = 1; pagina <= totalPaginas; pagina++) {

    const botao = document.createElement("button");

    botao.textContent = pagina;

    if (pagina === paginaAtual) {
      botao.classList.add("ativo");
    }

    botao.addEventListener("click", function() {
      mostrarProdutos(categoriaAtual, pagina);
    });

    paginacao.appendChild(botao);
  }


  if (paginaAtual < totalPaginas) {

    const proximo = document.createElement("button");

    proximo.textContent = "Próxima";

    proximo.addEventListener("click", function() {
      mostrarProdutos(categoriaAtual, paginaAtual + 1);
    });

    paginacao.appendChild(proximo);
  }
}


function abrirModal(produto) {

  modalNome.textContent = produto.nome;

  modalImagem.src = produto.imagem;
  modalImagem.alt = produto.nome;

  modalDescricao.textContent = produto.descricao;

  modalPreco.textContent = produto.preco;

  const mensagem =
    `Olá! Tenho interesse no produto "${produto.nome}", no valor de ${produto.preco}.`;

  const mensagemCodificada = encodeURIComponent(mensagem);

  modalWhatsapp.href =
    `https://wa.me/${NUMERO_WHATSAPP}?text=${mensagemCodificada}`;

  modal.classList.add("aberto");
}


function fecharModalProduto() {
  modal.classList.remove("aberto");
}


fecharModal.addEventListener("click", function() {
  fecharModalProduto();
});


modal.addEventListener("click", function(event) {

  if (event.target === modal) {
    fecharModalProduto();
  }

});


document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {
    fecharModalProduto();
  }

});


botoes.forEach(function(botao) {

  botao.addEventListener("click", function(event) {

    event.preventDefault();

    botoes.forEach(function(item) {
      item.classList.remove("ativo");
    });

    botao.classList.add("ativo");

    const categoriaSelecionada = botao.textContent.trim();

    mostrarProdutos(categoriaSelecionada, 1);
  });

});


mostrarProdutos("Todos", 1);
