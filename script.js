// ========================================
// MENU MOBILE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animação do ícone hambúrguer
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
});

// ========================================
// SCROLL SUAVE
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========================================
// ANIMAÇÃO DE SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.category-card, .differential-item, .product-card, .value-card, .contact-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ========================================
// HEADER SCROLL
// ========================================

let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// VALIDAÇÃO DE FORMULÁRIO (se necessário no futuro)
// ========================================

function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#A01915';
            } else {
                input.style.borderColor = '#CCCCCC';
            }
        });
        
        if (isValid) {
            // Enviar formulário
            form.submit();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
}

// ========================================
// LAZY LOADING DE IMAGENS
// ========================================

if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback para navegadores antigos
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========================================
// CONSOLE LOG (remover em produção)
// ========================================

console.log('%c G.Cartaxo - Distribuidora de Peças Automotivas ', 'background: #24211E; color: #FFFFFF; font-size: 16px; padding: 10px;');
console.log('%c Site desenvolvido com HTML, CSS e JavaScript ', 'background: #A01915; color: #FFFFFF; font-size: 12px; padding: 5px;');

// ========================================
// FORMULÁRIO DE DOWNLOADS (CAPTURA DE LEADS)
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('download-form');
    const messageDiv = document.getElementById('form-message');
    const pdfPath = 'Catalogo_G_Cartaxo.pdf'; // Caminho do seu PDF

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 1. Coletar Dados
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // 2. Validação Simples (Campos obrigatórios já são tratados pelo 'required' do HTML)
            if (!data.nome || !data.empresa || !data.tipo || !data.whatsapp || !data.email) {
                showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }

            // 3. Simulação de Envio para o Backend (Atenção: AQUI PRECISA DE UM BACKEND REAL)
            
            // ----------------------------------------------------------------------------------
            // INSTRUÇÃO IMPORTANTE:
            // Para que os dados sejam enviados para o e-mail (gcartaxo.distribuidora@gmail.com),
            // você DEVE integrar um serviço de backend (como PHP, Node.js, ou um serviço
            // de formulário como Formspree ou Netlify Forms) neste ponto.
            // O JavaScript puro não pode enviar e-mails diretamente por segurança.
            // ----------------------------------------------------------------------------------
            
            // Exemplo de como seria a chamada (APENAS UM PLACEHOLDER):
            /*
            fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    handleSuccess();
                } else {
                    showMessage('Erro ao enviar dados. Tente novamente.', 'error');
                }
            })
            .catch(error => {
                showMessage('Erro de conexão. Verifique sua internet.', 'error');
            });
            */

            // Simulação de sucesso imediato para fins de demonstração:
            setTimeout(handleSuccess, 1000); 
        });
    }

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = 'form-message ' + type;
        messageDiv.style.display = 'block';
    }

    function handleSuccess() {
        // 1. Exibir mensagem de confirmação
        showMessage('Obrigado! Seu download foi liberado com sucesso.', 'success');
        
        // 2. Desabilitar o formulário para evitar reenvio
        const inputs = form.querySelectorAll('input, select, button');
        inputs.forEach(input => input.disabled = true);

        // 3. Iniciar o download do PDF
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = pdfPath;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});
