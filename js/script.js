// JavaScript completo para o portfólio - com animações e APIs

// Inicializar AOS quando disponível - COMENTADO para manter estático
/*
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
}
*/

// API Functions
class PortfolioAPI {
    // API de citações inspiradoras
    static async fetchQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random?tags=technology,motivational,success');
            if (!response.ok) throw new Error('Erro ao buscar citação');
            
            return await response.json();
        } catch (error) {
            console.error('Erro Quote API:', error);
            return {
                content: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
                author: "Robert Collier"
            };
        }
    }
}

// Renderizar citação inspiradora
function renderQuote(quote) {
    const container = document.getElementById('inspirational-quote');
    if (!container) return;

    container.innerHTML = `
        <blockquote class="blockquote text-center">
            <p class="mb-0 fs-5">"${quote.content}"</p>
            <footer class="blockquote-footer mt-3">
                <cite title="Source">${quote.author}</cite>
            </footer>
        </blockquote>
    `;
}

// Aguardar o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // Inicializar APIs
    initializeAPIs();
    
    // Botão voltar ao topo
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Efeito de digitação no título
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Aplicar efeito de digitação quando a página carregar
    const title = document.querySelector('#home h1');
    if (title) {
        const originalText = title.innerText;
        setTimeout(() => {
            typeWriter(title, originalText, 80);
        }, 500);
    }

    // Animação das barras de progresso - COMENTADO para manter estático
    /*
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        progressBars.forEach(bar => {
            const skill = bar.getAttribute('data-skill');
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.transition = 'width 2s ease-in-out';
                bar.style.width = skill + '%';
            }, 500);
        });
    }

    // Executar animação quando a seção de habilidades entrar na tela
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.id === 'habilidades') {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const skillsSection = document.getElementById('habilidades');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    */

    // Efeito parallax suave - COMENTADO para manter estático
    /*
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('[data-aos]');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
    */

    // Adicionar efeito hover às redes sociais - COMENTADO para manter estático
    /*
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.transition = 'all 0.3s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    */

    // Animação dos cards de projeto - COMENTADO para manter estático
    /*
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
            this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        });
    });
    */

    // Animação dos botões - COMENTADO para manter estático
    /*
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    */

    // Efeito de pulse nos ícones de habilidades - COMENTADO para manter estático
    /*
    document.querySelectorAll('.skill-icon').forEach(icon => {
        setInterval(() => {
            icon.style.animation = 'pulse 1s ease-in-out';
            setTimeout(() => {
                icon.style.animation = '';
            }, 1000);
        }, 3000);
    });
    */

    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const assunto = document.getElementById('assunto').value;
            const mensagem = document.getElementById('mensagem').value.trim();
            const feedback = document.getElementById('formFeedback');
            
            // Limpar feedback anterior
            feedback.innerHTML = '';
            
            // Validação básica
            if (!nome || !email || !assunto || !mensagem) {
                feedback.innerHTML = '<div class="alert alert-danger"><i class="fas fa-exclamation-triangle"></i> Por favor, preencha todos os campos obrigatórios!</div>';
                return;
            }
            
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                feedback.innerHTML = '<div class="alert alert-danger"><i class="fas fa-exclamation-triangle"></i> Por favor, insira um e-mail válido!</div>';
                return;
            }
            
            // Preparar dados para envio por email
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Abrindo email...';
            submitBtn.disabled = true;
            
            // Construir o corpo do email
            let emailBody = 'Olá Jéssica,%0D%0A%0D%0A';
            emailBody += 'Meu nome é ' + encodeURIComponent(nome) + ' e gostaria de entrar em contato.%0D%0A%0D%0A';
            emailBody += '📧 Email: ' + encodeURIComponent(email) + '%0D%0A';
            if (telefone) {
                emailBody += '📱 Telefone: ' + encodeURIComponent(telefone) + '%0D%0A';
            }
            emailBody += '📋 Assunto: ' + encodeURIComponent(assunto) + '%0D%0A%0D%0A';
            emailBody += '💬 Mensagem:%0D%0A' + encodeURIComponent(mensagem) + '%0D%0A%0D%0A';
            emailBody += 'Aguardo seu retorno!%0D%0A%0D%0A';
            emailBody += 'Atenciosamente,%0D%0A' + encodeURIComponent(nome);
            
            // Definir o assunto do email
            const assuntoMap = {
                'freelance': 'Projeto Freelance',
                'emprego': 'Oportunidade de Emprego',
                'consultoria': 'Consultoria',
                'parceria': 'Parceria',
                'outros': 'Contato'
            };
            
            const emailSubject = encodeURIComponent((assuntoMap[assunto] || 'Contato') + ' - ' + nome);
            
            // Criar o link mailto
            const mailtoLink = 'mailto:jessica.sousa26@outlook.com?subject=' + emailSubject + '&body=' + emailBody;
            
            // Abrir cliente de email
            window.location.href = mailtoLink;
            
            // Feedback para o usuário
            setTimeout(function() {
                feedback.innerHTML = '<div class="alert alert-success"><i class="fas fa-check-circle"></i> Cliente de email aberto! <br><small>Se o email não abriu automaticamente, envie para: <strong>jessica.sousa26@outlook.com</strong></small></div>';
                
                // Restaurar botão
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Remover feedback após 10 segundos
                setTimeout(function() {
                    feedback.innerHTML = '';
                }, 10000);
            }, 1000);
        });
    }
});

// Inicializar todas as APIs
async function initializeAPIs() {
    console.log('🚀 Carregando citação inspiradora...');
    
    // Carregar citação inspiradora
    const quote = await PortfolioAPI.fetchQuote();
    if (quote) {
        renderQuote(quote);
        console.log('✅ Citação carregada:', quote.author);
    }
}