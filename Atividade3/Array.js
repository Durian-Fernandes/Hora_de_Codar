const listaDeCompras = ["Maçã", "Banana", "Laranja", "Uva", "Pera", "Morango", "Abacaxi", "Goiaba", "Manga"];
const mensagem = document.getElementById("mensagem");

function exibirLista() {
    mensagem.textContent = "Lista de Compras: " + listaDeCompras.join(", ");
}

function removerFruta() {
    const frutaRemover = prompt("Digite o nome de uma fruta para removê-la da lista:");

    if (frutaRemover === null) {
        return;
    }

    const index = listaDeCompras.indexOf(frutaRemover);

    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        mensagem.textContent = "Fruta foi retirada da lista.";
    } else {
        mensagem.textContent = "Fruta indisponível no nosso mercado.";
    }

    if (listaDeCompras.length === 0) {
        mensagem.textContent = "Lista de compras finalizada.";
    }
}

function adicionarFruta() {
    const frutaAdicionar = prompt("Digite o nome de uma fruta para adicioná-la à lista:");

    if (frutaAdicionar === null) {
        return;
    }

    listaDeCompras.push(frutaAdicionar);
    mensagem.textContent = "Fruta foi adicionada à lista.";
}


