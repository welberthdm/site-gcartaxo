# G.Cartaxo - Site Institucional

Site institucional profissional para a distribuidora de peças automotivas G.Cartaxo – Buchas Lonadas.

## 📋 Descrição

Site desenvolvido para apresentar a empresa como uma distribuidora especializada em peças de suspensão automotiva, com foco em atendimento B2B para lojistas, autopeças, distribuidores regionais e oficinas mecânicas no Ceará.

## 🎨 Características

- **Design Profissional**: Layout limpo, moderno e confiável
- **Paleta de Cores Institucional**:
  - Preto grafite: #24211E (cor principal)
  - Vermelho institucional: #A01915 (CTAs e destaques)
  - Branco: #FFFFFF (fundos e áreas de leitura)
- **Tipografia**:
  - Títulos: Poppins (Bold / SemiBold)
  - Textos: Inter (Regular / Medium)
- **Responsivo**: Otimizado para desktop, tablet e mobile
- **SEO Otimizado**: Estrutura semântica e meta tags apropriadas

## 📁 Estrutura de Arquivos

```
gcartaxo/
├── index.html          # Página inicial
├── quem-somos.html     # Página institucional
├── produtos.html       # Página de produtos
├── catalogo.html       # Página do catálogo técnico
├── contato.html        # Página de contato
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── logo.png            # Logo da empresa (inserir)
├── catalogo.pdf        # Catálogo técnico (inserir)
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### 1. Preparação dos Arquivos

1. **Logo**: Adicione o arquivo `logo.png` na pasta raiz
   - Formato recomendado: PNG com fundo transparente
   - Dimensões sugeridas: 300x100px (proporção 3:1)

2. **Catálogo PDF**: Adicione o arquivo `catalogo.pdf` na pasta raiz
   - Para exibir o PDF na página, descomente a linha no arquivo `catalogo.html`:
   ```html
   <embed src="catalogo.pdf" type="application/pdf" width="100%" height="800px" />
   ```

### 2. Configuração do WhatsApp

Substitua o número de telefone nos arquivos HTML:
- Procure por: `https://wa.me/5585999999999`
- Substitua por: `https://wa.me/55SEUNUMERO` (com DDD e número completo)

Exemplo: `https://wa.me/5585987654321`

### 3. Atualização de Informações de Contato

Edite os seguintes elementos em todos os arquivos HTML:

**Telefones** (no footer e página de contato):
```html
<p>WhatsApp: (85) 9 9999-9999</p>
<p>(85) 3333-3333</p>
```

**Horário de Atendimento** (página de contato):
```html
<p class="contact-detail">Segunda a Sexta</p>
<p class="contact-detail">08:00 às 18:00</p>
<p class="contact-note">Sábados: 08:00 às 12:00</p>
```

### 4. Hospedagem

O site pode ser hospedado em qualquer servidor web:

#### Opção 1: Hospedagem Tradicional
- Faça upload de todos os arquivos via FTP
- Certifique-se de que o `index.html` está na raiz

#### Opção 2: GitHub Pages (Gratuito)
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Ative o GitHub Pages nas configurações
4. Acesse via: `https://seuusuario.github.io/gcartaxo`

#### Opção 3: Netlify ou Vercel (Gratuito)
1. Crie uma conta no Netlify ou Vercel
2. Conecte seu repositório ou faça upload direto
3. O site será publicado automaticamente

## 🔧 Personalização

### Cores

Para alterar as cores do site, edite as variáveis CSS em `styles.css`:

```css
:root {
    --color-primary: #24211E;      /* Preto grafite */
    --color-secondary: #A01915;    /* Vermelho institucional */
    --color-white: #FFFFFF;        /* Branco */
}
```

### Fontes

As fontes são carregadas do Google Fonts. Para alterar:

1. Acesse [Google Fonts](https://fonts.google.com/)
2. Escolha novas fontes
3. Substitua o link no `<head>` de cada HTML
4. Atualize as variáveis em `styles.css`:

```css
:root {
    --font-heading: 'Poppins', sans-serif;
    --font-body: 'Inter', sans-serif;
}
```

## 📱 Funcionalidades

### Menu Responsivo
- Menu hambúrguer em dispositivos móveis
- Navegação suave entre seções
- Menu fixo no topo ao rolar a página

### WhatsApp Flutuante
- Botão fixo no canto inferior direito
- Presente em todas as páginas
- Link direto para conversa no WhatsApp

### Animações
- Elementos aparecem ao rolar a página
- Efeitos hover nos cards e botões
- Transições suaves

### SEO
- Meta tags otimizadas
- Estrutura semântica HTML5
- URLs amigáveis
- Um H1 por página
- Palavras-chave locais

## 📊 Páginas

### Home
- Hero section com CTAs principais
- Cards de categorias de produtos
- Bloco de diferenciais
- CTA final para WhatsApp

### Quem Somos
- Texto institucional
- Missão, Visão e Valores
- CTA para contato

### Produtos
- Grid com 4 categorias principais
- Descrição detalhada de cada categoria
- CTA para catálogo

### Catálogo
- Área para visualização de PDF
- Botão de download
- CTA WhatsApp para dúvidas

### Contato
- Cards com informações de contato
- WhatsApp em destaque
- Telefones, localização e horário
- Bloco de benefícios

## 🌐 Navegadores Suportados

- Chrome (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Edge (últimas 2 versões)
- Opera (últimas 2 versões)

## 📝 Notas Importantes

1. **Imagens**: Adicione imagens dos produtos para enriquecer o conteúdo
2. **Catálogo PDF**: Mantenha o arquivo atualizado regularmente
3. **WhatsApp**: Teste o link antes de publicar
4. **Responsividade**: Teste em diferentes dispositivos
5. **Performance**: Otimize imagens antes de fazer upload (use TinyPNG ou similar)

## 🔒 Segurança

- Não há formulários de envio de dados sensíveis
- Todos os links externos abrem em nova aba
- Código limpo e validado

## 📞 Suporte

Para dúvidas sobre o código ou personalização, consulte a documentação de HTML, CSS e JavaScript ou contrate um desenvolvedor web.

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para G.Cartaxo – Buchas Lonadas.

---

**Desenvolvido com HTML5, CSS3 e JavaScript**
