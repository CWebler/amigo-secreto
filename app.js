let listaDeAmigos = [];

function adicionarAmigo() {
    let campoNome = document.getElementById("amigo");
    let nome = campoNome.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    listaDeAmigos.push(nome);
    campoNome.value = "";

    exibirListaDeAmigos();
}

function exibirListaDeAmigos() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; 
  
    listaDeAmigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (listaDeAmigos.length === 0) {
        resultado.innerHTML = "Nenhum amigo disponível para sortear.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    resultado.innerHTML = "Amigo secreto sorteado: " + amigoSorteado;
}