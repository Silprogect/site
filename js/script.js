// Seleciona a lista <ul> dentro do elemento <nav>
let ul = document.querySelector('nav ul');

// Função para abrir o menu (adiciona a classe 'open')

functio

function openMenu() {
    ul.classList.add('open');
}

// Função para fechar o menu (remove a classe 'open')
function closeMenu() {
    ul.classList.remove('open');
}