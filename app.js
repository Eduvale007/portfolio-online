const menu = document.querySelector('#mobile-menu');
const navList = document.querySelector('.nav-list');

// Abre e fecha ao clicar no botão
menu.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede que o clique no botão ative o "clique fora"
    menu.classList.toggle('is-active');
    navList.classList.toggle('active');
});

// Fecha ao clicar em qualquer link
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-active');
        navList.classList.remove('active');
    });
});

// FECHAR AO CLICAR FORA
document.addEventListener('click', (e) => {
    // Se clicar fora do menu E fora do botão, e o menu estiver aberto:
    if (!navList.contains(e.target) && !menu.contains(e.target)) {
        if (navList.classList.contains('active')) {
            menu.classList.remove('is-active');
            navList.classList.remove('active');
        }
    }
});