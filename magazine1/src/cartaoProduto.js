import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";


export function renderizarCatalogo() {
    // faz um loop e cria div de cada produto. 
    for (const produtoCatalogo of catalogo) {
        // cria uma div de cada produto com imagem, marca, nome, preço, butão.
            const cartaoProduto = `
            <div class="border-solid  w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produtoCatalogo.feminino ? 'feminino' : 'masculino'}" id="card-produto-${produtoCatalogo.id}">
                <img src="./assets/img/${produtoCatalogo.imagem}" alt="produto 1" style="height: 300px;"
                class="group-hover:scale-110 duration-300 my-3 rounded-lg">
                <p class="text-sm">${produtoCatalogo.marca}</p>
                <p class="text-sm">${produtoCatalogo.nome}</p>
                <p class="text-sm">R$ ${produtoCatalogo.preco}</p>
                <button id="adicionar-${produtoCatalogo.id}" class="bg-slate-950 hover:bg-slate-700 text-slate-200 ">
                <i class="fa-solid fa-cart-plus"></i></button>
            </div>
        `
        document.getElementById('container-produto').innerHTML += cartaoProduto;
    }

    for (const produtoCatalogo of catalogo) {
        document
        .getElementById(`adicionar-${produtoCatalogo.id}`)
        .addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id));
    }
}


