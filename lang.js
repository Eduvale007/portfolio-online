const translations = {
    'en': {
        'nav_home': 'Home',
        'nav_about': 'About',
        'nav_projects': 'Projects',
        'nav_skills': 'Skills',
        'nav_resume': 'Resume',
        'badge_automation': 'Data Engineering >', // Atualizado para seu novo foco
        'hero_title': 'ARCHITECTING DATA & DIGITAL SOLUTIONS',
        'hero_desc': "Hi, I'm Eduardo. A Full-stack Developer and aspiring Data Engineer focused on data architecture, storage, and transformation.",
        'btn_projects': 'VIEW PROJECTS',
        'btn_resume': 'DOWNLOAD RESUME',
        'proj_section_title': 'Featured Projects',
        'btn_live': 'View Live',
        'btn_code': 'Code',
        'skills_title': 'Skills & Expertise',
        // --- Bio Dinâmica (About) ---
        'about_title': "BEYOND THE CODE",
        'about_desc': "I'm Eduardo, a developer aiming to become a Data Engineer. I specialize in storage architecture and data transformation. When I'm not architecting pipelines, I'm solving Rubik's cubes, reading, or playing games. Next big step: Canada!"
    },
    'pt': {
        'nav_home': 'Início',
        'nav_about': 'Sobre',
        'nav_projects': 'Projetos',
        'nav_skills': 'Habilidades',
        'nav_resume': 'Currículo',
        'badge_automation': 'Eng. de Dados >', // Atualizado para seu novo foco
        'hero_title': 'ARQUITETANDO DADOS E SOLUÇÕES DIGITAIS',
        'hero_desc': "Oi, eu sou o Eduardo. Desenvolvedor Full-stack e aspirante a Engenheiro de Dados com foco em arquitetura, armazenamento e transformação.",
        'btn_projects': 'VER PROJETOS',
        'btn_resume': 'BAIXAR CURRÍCULO',
        'proj_section_title': 'Projetos em Destaque',
        'btn_live': 'Ver Site',
        'btn_code': 'Código',
        'skills_title': 'Habilidades & Especialidades',
        // --- Bio Dinâmica (About) ---
        'about_title': "ALÉM DO CÓDIGO",
        'about_desc': "Sou o Eduardo, desenvolvedor com o sonho de ser Engenheiro de Dados. Focado em arquitetura de armazenamento e transformação de dados. Nas horas vagas, resolvo cubos mágicos, leio e jogo videogame. Próxima parada: Canadá!"
    }
};
// --- Função Principal de Tradução ---
function applyAutoLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const lang = browserLang.startsWith('pt') ? 'pt' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;
    return lang; // Retorna o idioma detectado para uso posterior
}

// --- Lógica do Botão "About" ---
function setupAboutToggle() {
    const aboutBtn = document.querySelector('a[href="#about"]');
    const heroTitle = document.querySelector('[data-i18n="hero_title"]');
    const heroDesc = document.querySelector('[data-i18n="hero_desc"]');

    if (aboutBtn && heroTitle && heroDesc) {
        aboutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = document.documentElement.lang || 'en';

            // Efeito Fade Out
            heroTitle.style.opacity = 0;
            heroDesc.style.opacity = 0;

            setTimeout(() => {
                // Troca o conteúdo usando o dicionário
                heroTitle.textContent = translations[lang].about_title;
                heroDesc.textContent = translations[lang].about_desc;

                // Efeito Fade In
                heroTitle.style.opacity = 1;
                heroDesc.style.opacity = 1;
            }, 300);
        });
    }
}

// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    applyAutoLanguage();
    setupAboutToggle();
});