const produtos = [
  {
    nome: "Sofá Living Felicia 180 3Lugares Linhão Nanquim",
    categoria: "Sofás",
    imagem: "imagens/sofas/Estofado Living Felicia 180 3 Lgs Linho Inox Viero.jpg",
    descricao: "Estofado Living Felicia 180 3 Lugares, Tecido Linhão, Cor Nanquim",
    preco: "R$ 998,00"
  },

  {
    nome: "Roupeiro Star 2Portas 6Gavetas Cinamomo/Off White",
    categoria: "Roupeiros",
    imagem: "imagens/roupeiros/Roupeiro Star 2P6G Cinamomo Off White.jpg",
    descricao: "Roupeiro Star, 2 Portas, 6 Gavetas, Cor Cinamomo/Off White",
    preco: "R$ 953,00"
  },
  
  {
    nome: "Comoda Perola Fluence Plus 8Gavetas Freijo",
    categoria: "Cômodas",
    imagem: "imagens/comodas/Comoda Perola Fluence Plus 8G Freijo.jpg",
    descricao: "Cômoda Pérola Fluence Plus 8 Gavetas, Cor Freijó",
    preco: "R$ 480,00"
  },

  {
    nome: "Roupeiro Vivacce 4Portas    4Gavetas Cinamomo Off White",
    categoria: "Roupeiros",
    imagem: "imagens/roupeiros/Roupeiro Vivacce 4P4G Cinamomo Off White 4V Albatroz.jpg",
    descricao: "Roupeiro Vivvace 4 Portas, 4 Gavetas, Cor Cinamomo Off White",
    preco: "R$ 1.399,99"
  },

  {
    nome: "Roupeiro Madri 6Portas Vidro Reflecta Peroba",
    categoria: "Roupeiros",
    imagem: "imagens/roupeiros/Roupeiro Madri 6P Vidro Reflecta Peroba 10V.jpg",
    descricao: "Roupeiro Madri 6 Portas de vidro Reflecta Peroba",
    preco: "R$ 3.700,00"
  },

  {
    nome: "Roupeiro Camarim Olimpia 4Portas 2Gavetas Cinamomo/Salvia",
    categoria: "Roupeiros",
    imagem: "imagens/roupeiros/Roupeiro Camarim Olimpia 4P2G Cinamomo Salvia.jpg",
    descricao: "Roupeiro Camarim Olimpia 4 Portas 2 Gavetas, Cor Cinamomo/Salvia",
    preco: "R$ 983,00"
  },

  {
    nome: "Roupeiro Itapema 8Portas 4Gavetas c/ Espelho - Nogueira Off White",
    categoria: "Roupeiros",
    imagem: "imagens/roupeiros/Roupeiro Itapema 8P4G com Pés e Espelhos Nogueira Madeira Natura Off White.jpg",
    descricao: "Roupeiro Itapema 8 Portas, 4 Gavetas, com Pés e Espelhos, Cor Nogueira Madeira/ Natura Off White",
    preco: "R$ 954,00"
  },

  {
    nome: "Roupeiro Panama 3Portas 4Gavetas Cinamomo",
    categoria: "Roupeiros",
    imagem: "imagens/roupeiros/Roupeiro Panama 3P4G sem Espelho e sem Pes Cinamomo ou Cinamomo.jpg",
    descricao: "Roupeiro Panamá 3 Portas , 4 Gavetas, Cor Cinamomo",
    preco: "R$ 952,00"
  },

  {
    nome:"Roupeiro Super Master 6Portas 6Gavetas Cinamomo Off White",
    categoria: "Roupeiros",
    imagem: "imagens/roupeiros/Roupeiro Super Master 6P6G Cinamomo Off White.jpg",
    descricao: "Roupeiro Super Master 6 Portas 6 Gavetas Cinamomo Off White",
    preco: "R$ 1.200,00"
  },

  {
    nome: "Roupeiro Chicago 6Portas 6Gavetas Cinamomo Off White",
    categoria: "Roupeiros",
    imagem: "imagens/roupeiros/Roupeiro Chicago 6P6G Cinamomo Off White.jpg",
    descricao: "Roupeiro Chicaco 6 Portas 6 Gavetas Cinamomo Off White",
    preco: "R$ 1418,00"
  },

  {
    nome: "Roupeiro Star 3Portas 9Gavetas Cinamomo Off White",
    categoria: "Roupeiros",
    imagem: "imagens/roupeiros/Roupeiro Star 3P9G Cinamomo Off White.jpg",
    descricao: "Roupeiro Star 3 Portas 9 Gavetas Cinamomo Off White",
    preco: "R$ 999,99"
  },

  {
    nome: "Roupeiro Itapema 3Portas 9Gavetas Cedro Areia",
    categoria: "Roupeiros",
    imagem: "imagens/roupeiros/Roupeiro Itapema II 3P9G Cedro Areia.jpg",
    descricao: "Roupeiro Itapema 3 Portas 9 Gavetas Cedro Areia",
    preco: "R$ 1.199,00"
  },

  {
    nome: "Comoda Vitoria Plus 5Gavetas 1Porta Cedro",
    categoria: "Cômodas",
    imagem: "imagens/comodas/Comoda Vitoria Plus 5G1P Cedro.jpg",
    descricao: "Cômoda Vitoria Plus 5 Gavetas 1 Porta Cedro",
    preco: "R$ 480,00"
  },

  {
    nome: "Conjunto Sala Jantar Cindy Tampo 90 Mel com 4 Cadeiras Delta Mel Savana",
    categoria: "Mesas",
    imagem: "imagens/mesas/Conjunto Sala Jantar Cindy Tmp Redondo 90cm Mel com 4 Cds Delta Mel Savana.jpg",
    descricao: "Conjunto Mesa Sala de jantar Cindy Tampo Redondo 90 Mel com 4 Cadeiras Delta Mel Savana",
    preco: "R$ 489,00"
  },

  {
    nome: "Conjunto Sala Jantar Luana Tampo 106 Off White com 4 Cadeiras Luana Mel Savana",
    categoria: "Mesas",
    imagem: "imagens/mesas/conjunto Sala Jantar Luana Tmp Retangular 106 Off White com 4 Cds Luana Mel-Savana.jpg",
    descricao: "Conjunto Mesa Sala de Jantar Luana Tampo Retangular 106 com 4 Cadeiras Luana Mel Savana",
    preco: "R$ 529,00"
  },

  {
    nome: "Conjunto Sala Jantar Sara Tampo 136 Mel com 6 Cadeiras Luana Mel Savana",
    categoria: "Mesas",
    imagem: "imagens/mesas/Conjunto Sala Jantar Sara Tmp Retangular 136 Mel com 6 Cds Luana Mel-Savana.jpg",
    descricao: "Conjunto Mesa Sala de Jantar Sara Tampo Retangular 136 Mel com 6 Cadeiras Luana Mel Savana",
    preco: "R$ 589,00"
  },

  {
    nome: "Conjunto Sala Wave Oasis 90 com 4 Cadeiras Sol Mel Linho Bronze",
    categoria: "Mesas",
    imagem: "imagens/mesas/Sala Wave Oasis 90x90 com 4 Cadeiras Sol Mel Linho Bronze.jpg",
    descricao: "Conjunto Mesa Sala de Jnatar Wave Oasis 90 com 4 Cadeiras SOl Mel Linho Bronze",
    preco: "R$ 634,00"
  },

  {
    nome: "Conjunto Sala Perla 110 Mel com 4 Cadeiras Brisa Mel Veludo Marfim",
    categoria: "Mesas",
    imagem: "imagens/mesas/Sala Perla 110x75 Mel com 4 Cadeiras Brisa Mel Veludo Marfim.jpg",
    descricao: "Conjunto Mesa Sala de Jantar Perla 110 Mel com 4 Cadeiras Brisa Mel Veludo Marfim",
    preco: "R$ 567,00"
  },

  {
    nome: "Conjunto Sala Aurea 180 com 6 Cadeiras Safira Mel Blonde Off White Veludo Marfim",
    categoria: "Mesas",
    imagem: "imagens/mesas/Sala Aurea 180x90 com 6 Cadeiras Safira Mel Blonde Off White Veludo Marfim.jpg",
    descricao: "Conjunto Mesa Sala de Jantar Aurea 180 com 6 Cadeiras Safira Mel Blonde/Off White Veludo Marfim",
    preco: "R$ 1.999,99"
  },

  {
    nome: "Conjunto Sala Ibi 120 com 4 Cadeiras Safira Mel Blonde Off White Veludo Marfim",
    categoria: "Mesas",
    imagem: "imagens/mesas/Sala Ibi 120x90 com 4 Cadeiras Safira Mel Blonde Off White Veludo Marfim.jpg",
    descricao: "Conjunto Mesa Sala de Jantar Ibi 120 Com 4 Cadeiras Safira Mel Blonde/ Off White Veludo Marfim",
    preco: "R$ 1.299,99"
  },

  {
    nome: "Conjunto Sala Amanda Tampo 110 Off White com 4 Cadeiras Delta Mel Savana",
    categoria: "Mesas",
    imagem: "imagens/mesas/Conjunto Sala Jantar Amanda Tmp Retangular 110 Off White com 4 Cadeiras Delta Mel Savana.jpg",
    descricao: "Conjunto Mesa Sala de Jantar Amanda Tampo 110 Retangular 110 Off White Com 4 Cadeiras Delta Mel Savana",
    preco: "R$ 469,99"
  },

  {
    nome: "Conjunto Sala Jantar Luiza Tampo 110 Off White com 4 Cadeiras Delta Mel Savana",
    categoria: "Mesas",
    imagem: "imagens/mesas/Conjunto Sala Jantar Luiza Tmp Retangular 110 Off White com 4 Cds Delta Mel Savana.jpg",
    descricao: "Conjunto Mesa Sala de Jantar Luiza Tampo 110 Off White com 4 Cadeiras Delta Mel Savana",
    preco: "R$ 469,00"
  },

  {
    nome: "Sala Deli Denali 160 Mel Grafite com 6 Cadeiras Safira Mel Veludo Grafite",
    categoria: "Mesas",
    imagem: "imagens/mesas/Sala Deli Denali 160 Mel Grafite com 6 Cadeiras Safira Mel Veludo Grafite.jpg",
    descricao: "Conjunto Mesa Sala de Jantar De Deli Delani 160 Mel Grafite com 6 Cadeiras Safira Mel Veludo Grafite",
    preco: "R$ 1.899,99"
  },

  {
    nome: "Sala Daila Nicole 135 Mel Blonde Grafite com 6 Cadeiras Safira Mel Blonde Veludo Grafite",
    categoria: "Mesas",
    imagem: "imagens/mesas/Sala Daila Nicole 135 Mel Blonde Grafite com 6 Cadeiras Sarifa Mel Blonde Veludo Grafite.jpg",
    descricao: "Conjunto Mesa Sala de Jantar Daila Nicole 135 Mel Blonde Grafite com 6 Cadeiras Safira Mel Blonde Veludo Grafite",
    preco: "R$ 1.798,99"
  },

  {
    nome: "Sala Magic 120 Mel Blonde com 4 Cadeiras Sol Mel Cinza Veludo Grafite",
    categoria: "Mesas",
    imagem: "imagens/mesas/Sala Magic 120 Mel.Blonde com 4 Cadeiras Sol Mel Cinza Veludo Grafite.jpg",
    descricao: "Conjunto Mesa Sala Magic 120 Mel Blonde com 4 Cadeiras Sol Me Cinza Veludo Grafite",
    preco: "R$ 689,99"
  },

  {
    nome: "Sala Melody 90 com 4 Cadeiras Bela Mel Blonde Off White Linho Bronze",
    categoria: "Mesas",
    imagem: "imagens/mesas/Sala Melody 90com 4 Cadira Bela Mel Blonde Off White Linho Bronze.jpg",
    descricao: "Conjunto Mesa Sala Melody 90 com 4 Cadeiras Bela Mel Blonde Off White Linho Bronze",
    preco: " R$ 749,00"
  }
    
  
      
      
];
