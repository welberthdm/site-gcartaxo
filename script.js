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
// FORMULÁRIO DE DOWNLOADS (INTEGRAÇÃO FORMSPREE)
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('download-form');
    const messageDiv = document.getElementById('form-message');
    
    // ATENÇÃO: Verifique se o nome do arquivo está correto na pasta do site
    const pdfPath = 'Catalogo_G_Cartaxo.pdf'; 

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o recarregamento da página
            
            // Muda o texto do botão para dar feedback visual
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Enviando...';
            submitBtn.disabled = true;

            const formData = new FormData(form);

            // Envio via AJAX para o Formspree
            fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Sucesso: Mostra mensagem e baixa o PDF
                    handleSuccess(); 
                } else {
                    // Erro no Formspree (ex: e-mail inválido)
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            showMessage(data["errors"].map(error => error["message"]).join(", "), 'error');
                        } else {
                            showMessage('Ocorreu um erro ao enviar. Tente novamente.', 'error');
                        }
                    });
                    resetButton(submitBtn, originalBtnText);
                }
            })
            .catch(error => {
                // Erro de rede
                showMessage('Erro de conexão. Verifique sua internet.', 'error');
                resetButton(submitBtn, originalBtnText);
            });
        });
    }

    function showMessage(message, type) {
        messageDiv.textContent = message;
        // Remove classes anteriores e adiciona a nova
        messageDiv.className = 'form-message';
        messageDiv.classList.add(type); 
        messageDiv.style.display = 'block';
        
        // Estilização simples baseada no tipo (caso não tenha no CSS)
        if(type === 'error') {
            messageDiv.style.color = '#A01915';
            messageDiv.style.borderColor = '#A01915';
        } else {
            messageDiv.style.color = '#2e7d32'; // Verde sucesso
            messageDiv.style.borderColor = '#2e7d32';
        }
    }

    function resetButton(btn, originalText) {
        btn.innerText = originalText;
        btn.disabled = false;
    }

    function handleSuccess() {
        // 1. Exibir mensagem de confirmação
        showMessage('Cadastro recebido! O download iniciará em instantes.', 'success');
        
        // 2. Iniciar o download do PDF
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = pdfPath;
            link.download = pdfPath; // Força o download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 1000); // Pequeno delay para o usuário ler a mensagem
    }
});
