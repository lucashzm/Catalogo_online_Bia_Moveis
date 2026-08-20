const listaProdutos = document.getElementById("lista-produtos");
const botoes = document.querySelectorAll(".filtro");
const paginacao = document.getElementById("paginacao");
const campoBusca = document.getElementById("campo-busca");

const ordenarPreco = document.getElementById("ordenar-preco");

const modal = document.getElementById("modal-produto");
const fecharModal = document.getElementById("fechar-modal");
const modalNome = document.getElementById("modal-nome");
const modalImagem = document.getElementById("modal-imagem");
const modalDescricao = document.getElementById("modal-descricao");
const modalPreco = document.getElementById("modal-preco");
const modalWhatsapp = document.getElementById("modal-whatsapp");
const modalMiniaturas = document.getElementById("modal-miniaturas");

const NUMERO_WHATSAPP = "5521983531564";

const PRODUTOS_POR_PAGINA = 30;

let categoriaAtual = "Todos";
let paginaAtual = 1;

let ordemPreco = null;


/* =========================
   CONVERTER PREÇO PARA NÚMERO
   ========================= */

function extrairPreco(preco) {

  return Number(
    String(preco)
      .replace(/[^\d,.-]/g, "")
      .replace(/\./g, "")
      .replace(",", ".")
  );

}


/* =========================
   MOSTRAR PRODUTOS
   ========================= */

function mostrarProdutos(categoria, pagina = 1) {

  categoriaAtual = categoria;
  paginaAtual = pagina;

  listaProdutos.innerHTML = "";


  /* =========================
     BUSCA
     ========================= */

  const textoBusca = campoBusca.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");


  /* =========================
     FILTRO
     ========================= */

  const produtosFiltrados = produtos.filter(function(produto) {

    const nomeProduto = produto.nome
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");


    const correspondeBusca =
      nomeProduto.includes(textoBusca);


    const correspondeCategoria =
      categoria === "Todos" ||
      produto.categoria === categoria;


    return correspondeBusca && correspondeCategoria;

  });


  /* =========================
     ORDENAÇÃO POR PREÇO
     ========================= */

  if (ordemPreco === "menor") {

    produtosFiltrados.sort(function(a, b) {

      return extrairPreco(a.preco) -
             extrairPreco(b.preco);

    });

  }


  if (ordemPreco === "maior") {

    produtosFiltrados.sort(function(a, b) {

      return extrairPreco(b.preco) -
             extrairPreco(a.preco);

    });

  }


  /* =========================
     PAGINAÇÃO
     ========================= */

  const inicio =
    (pagina - 1) * PRODUTOS_POR_PAGINA;

  const fim =
    inicio + PRODUTOS_POR_PAGINA;


  const produtosDaPagina =
    produtosFiltrados.slice(inicio, fim);


  /* =========================
     CRIAR CARDS
     ========================= */

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


/* =========================
   PAGINAÇÃO
   ========================= */

function criarPaginacao(totalProdutos) {

  paginacao.innerHTML = "";


  const totalPaginas =
    Math.ceil(
      totalProdutos / PRODUTOS_POR_PAGINA
    );


  if (totalPaginas <= 1) {
    return;
  }


  /* =========================
     BOTÃO ANTERIOR
     ========================= */

  if (paginaAtual > 1) {

    const anterior =
      document.createElement("button");


    anterior.textContent = "Anterior";


    anterior.addEventListener("click", function() {

      mostrarProdutos(
        categoriaAtual,
        paginaAtual - 1
      );

    });


    paginacao.appendChild(anterior);

  }


  /* =========================
     NÚMEROS DAS PÁGINAS
     ========================= */

  for (
    let pagina = 1;
    pagina <= totalPaginas;
    pagina++
  ) {

    const botao =
      document.createElement("button");


    botao.textContent = pagina;


    if (pagina === paginaAtual) {

      botao.classList.add("ativo");

    }


    botao.addEventListener("click", function() {

      mostrarProdutos(
        categoriaAtual,
        pagina
      );

    });


    paginacao.appendChild(botao);

  }


  /* =========================
     BOTÃO PRÓXIMA
     ========================= */

  if (paginaAtual < totalPaginas) {

    const proximo =
      document.createElement("button");


    proximo.textContent = "Próxima";


    proximo.addEventListener("click", function() {

      mostrarProdutos(
        categoriaAtual,
        paginaAtual + 1
      );

    });


    paginacao.appendChild(proximo);

  }

}


/* =========================
   ABRIR MODAL
   ========================= */

function abrirModal(produto) {

  modalNome.textContent =
    produto.nome;


  modalImagem.src =
    produto.imagem;


  modalImagem.alt =
    produto.nome;


  /* =========================
     GALERIA
     ========================= */

  modalMiniaturas.innerHTML = "";


  const imagensProduto = [
    produto.imagem,
    ...(produto.imagens || [])
  ];


  if (imagensProduto.length > 1) {

    imagensProduto.forEach(function(imagem, index) {

      const miniatura =
        document.createElement("img");


      miniatura.src =
        imagem;


      miniatura.alt =
        produto.nome;


      if (index === 0) {

        miniatura.classList.add("ativa");

      }


      miniatura.addEventListener(
        "click",
        function(event) {

          event.stopPropagation();


          modalImagem.src =
            imagem;


          document
            .querySelectorAll(
              ".modal-miniaturas img"
            )
            .forEach(function(item) {

              item.classList.remove("ativa");

            });


          miniatura.classList.add("ativa");

        }
      );


      modalMiniaturas.appendChild(
        miniatura
      );

    });

  }


  /* =========================
     DESCRIÇÃO
     ========================= */

  modalDescricao.textContent =
    produto.descricao;


  if (produto.detalhes) {

    modalDescricao.textContent =
      produto.detalhes;

  }


  /* =========================
     PREÇO
     ========================= */

  modalPreco.textContent =
    produto.preco;


  /* =========================
     WHATSAPP
     ========================= */

  const mensagem =
    `Olá! Tenho interesse no produto "${produto.nome}", no valor de ${produto.preco}.`;


  const mensagemCodificada =
    encodeURIComponent(mensagem);


  modalWhatsapp.href =
    `https://wa.me/${NUMERO_WHATSAPP}?text=${mensagemCodificada}`;


  modal.classList.add("aberto");

}


/* =========================
   FECHAR MODAL
   ========================= */

function fecharModalProduto() {

  modal.classList.remove("aberto");

}


fecharModal.addEventListener(
  "click",
  function() {

    fecharModalProduto();

  }
);


/* =========================
   FECHAR CLICANDO FORA
   ========================= */

modal.addEventListener(
  "click",
  function(event) {

    if (event.target === modal) {

      fecharModalProduto();

    }

  }
);


/* =========================
   FECHAR COM ESC
   ========================= */

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {

      fecharModalProduto();

    }

  }
);


/* =========================
   FILTROS DE CATEGORIA
   ========================= */

botoes.forEach(function(botao) {

  botao.addEventListener(
    "click",
    function(event) {

      event.preventDefault();


      botoes.forEach(function(item) {

        item.classList.remove("ativo");

      });


      botao.classList.add("ativo");


      const categoriaSelecionada =
        botao.textContent.trim();


      mostrarProdutos(
        categoriaSelecionada,
        1
      );

    }
  );

});


/* =========================
   BUSCA ENQUANTO DIGITA
   ========================= */

campoBusca.addEventListener(
  "input",
  function() {

    mostrarProdutos(
      categoriaAtual,
      1
    );

  }
);


/* =========================
   ORDENAR POR PREÇO
   =========================
   
   1º clique  → menor para maior
   2º clique  → maior para menor
   3º clique  → menor para maior
   4º clique  → maior para menor
   ========================= */

ordenarPreco.addEventListener(
  "click",
  function() {

    if (
      ordemPreco === null ||
      ordemPreco === "maior"
    ) {

      ordemPreco = "menor";

    } else {

      ordemPreco = "maior";

    }


    ordenarPreco.classList.add("ativo");


    mostrarProdutos(
      categoriaAtual,
      1
    );

  }
);


/* =========================
   INICIAR CATÁLOGO
   ========================= */

mostrarProdutos("Todos", 1);
