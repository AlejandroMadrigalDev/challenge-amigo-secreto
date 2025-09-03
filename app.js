// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let amigo = "";

function agregarAmigo() {
    amigo = document.getElementById('amigo').value;
    if (amigo === "") {
        alert("Debe ingresar un nombre que sea valido, el campo no puede quedar vacio.")
    }
    listaAmigos.push(amigo);
    console.log(listaAmigos);

    document.getElementById('amigo').value = "";
    return;
}