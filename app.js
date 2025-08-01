// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value;

    if (nuevoAmigo === '') {
        alert('Por favor ingrese un nombre');
    } else {
        amigos.push(nuevoAmigo);
    }

    document.getElementById('amigo').value = '';

    mostrarAmigos();
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let i=0;i<amigos.length;i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if(amigos.length == 0 || amigos.length == 1) {
        alert('Por favor, ingrese al menos 2 nombres');
        return;
    }

    let i = Math.floor(Math.random() * amigos.length);

    let sorteado = document.getElementById('resultado');
    sorteado.innerHTML = `El amigo secreto sorteado es: ${amigos[i]}`;
}