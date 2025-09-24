// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let amigo = "";

function agregarAmigo() {
    amigo = document.getElementById('amigo').value;
    if (amigo === "") {
        alert("Debe ingresar un nombre que sea valido, el campo no puede quedar vacio.")
    }

    if (listaAmigos.includes(amigo)) {
        alert("El amigo ya se encuentra en la lista.");
        return;
    }

    listaAmigos.push(amigo);

    document.getElementById('amigo').value = "";
    mostrarAmigos();
    return;
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaAmigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}