import { criarItemDaLista } from "./scripts/criarItemDaLista.js"
import verificarListavazia from "./scripts/verificarListaVazia.js"
const listaDeCompras = document.getElementById("lista-de-compras")
const botaoAdicionar = document.getElementById("adicionar-item")


botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault()
    const itemDaLista = criarItemDaLista()
    listaDeCompras.appendChild(itemDaLista)
    verificarListavazia(listaDeCompras)
})


verificarListavazia(listaDeCompras
    
)