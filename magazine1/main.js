// const nomeProduto = 'Casaco Brando';
// const marcaProduto = 'Zara';
// const preco = 70;
// const arquivoImagem = 'product-1.jpg';

// Para comentar varias linhas, seleciona e clica em  CTRL + K + C

import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import { inicializarCarrinho, atualizarPrecoCarrinho,renderizarProdutosCarrinho } from "./src/menuCarrinho";


renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();

