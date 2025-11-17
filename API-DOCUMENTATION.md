# 🚀 APIs Integradas ao Portfólio

Este portfólio utiliza APIs modernas para exibir conteúdo dinâmico e atualizado automaticamente.

## 📡 APIs Implementadas

### 1. **GitHub API** 
**Endpoint:** `https://api.github.com/`

**Funcionalidades:**
- ✅ Busca repositórios reais do GitHub
- ✅ Exibe estatísticas do perfil (repos, seguidores, seguindo)
- ✅ Mostra linguagens de programação
- ✅ Links diretos para repositórios e demos
- ✅ Filtro automático (apenas repositórios próprios)
- ✅ Ordenação por última atualização

**Endpoints utilizados:**
```javascript
// Repositórios
GET https://api.github.com/users/JessicaSousa26/repos?sort=updated&per_page=6

// Perfil
GET https://api.github.com/users/JessicaSousa26
```

**Dados exibidos:**
- Nome do repositório
- Descrição
- Linguagem principal
- Número de stars e forks
- Link para o código
- Link para demo (se houver)

### 2. **Quotable API**
**Endpoint:** `https://api.quotable.io/`

**Funcionalidades:**
- ✅ Citações inspiradoras aleatórias
- ✅ Filtro por tags (tecnologia, motivação, sucesso)
- ✅ Autor da citação
- ✅ Fallback com citação padrão

**Endpoint utilizado:**
```javascript
GET https://api.quotable.io/random?tags=technology,motivational,success
```

## 🎯 Benefícios das APIs

### **Para o Portfólio:**
1. **Conteúdo Dinâmico** - Sempre atualizado
2. **Credibilidade** - Projetos reais do GitHub
3. **Interatividade** - Demonstra habilidades técnicas
4. **Automação** - Não precisa atualizar manualmente

### **Para Recrutadores:**
1. **Verificação Direta** - Links para projetos reais
2. **Atividade Recente** - Vê engajamento no GitHub
3. **Competências Técnicas** - Consumo de APIs REST
4. **Boas Práticas** - Tratamento de erros e loading states

## 🛠️ Implementação Técnica

### **Arquitetura:**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   GitHub API    │    │  Quotable API   │    │   Frontend      │
│                 │    │                 │    │                 │
│ • Repositórios  │───▶│ • Citações      │───▶│ • Renderização  │
│ • Perfil        │    │ • Autores       │    │ • Loading       │
│ • Estatísticas  │    │ • Categorias    │    │ • Error Handle  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### **Tratamento de Erros:**
- ✅ Try/catch em todas as chamadas
- ✅ Fallbacks para dados offline
- ✅ Loading states visuais
- ✅ Mensagens de erro amigáveis

### **Performance:**
- ✅ Chamadas assíncronas (async/await)
- ✅ Limite de repositórios (6 máximo)
- ✅ Cache do navegador
- ✅ Carregamento paralelo

## 📊 Dados Exibidos

### **GitHub Section:**
```json
{
  "repositórios": 6,
  "informações": [
    "nome",
    "descrição", 
    "linguagem",
    "stars",
    "forks",
    "link_github",
    "link_demo"
  ],
  "estatísticas": [
    "total_repos",
    "seguidores",
    "seguindo"
  ]
}
```

### **Quote Section:**
```json
{
  "citação": "texto_inspirador",
  "autor": "nome_autor",
  "categoria": "technology|motivational|success"
}
```

## 🔄 Atualização Automática

**Quando as APIs são chamadas:**
1. ✅ No carregamento da página
2. ✅ Dados sempre atualizados
3. ✅ Sem cache persistente (dados frescos)

**Frequência de atualização:**
- GitHub: A cada visita à página
- Quotes: Nova citação a cada carregamento

## 🚀 Como Testar

1. **Abra o console do navegador** (F12)
2. **Procure pelas mensagens:**
   - `🚀 Carregando dados das APIs...`
   - `✅ Repositórios GitHub carregados`
   - `✅ Perfil GitHub carregado`
   - `✅ Citação carregada`

3. **Verifique as seções:**
   - Estatísticas do GitHub atualizadas
   - Repositórios reais listados
   - Citação inspiradora carregada

## 💡 Futuras Expansões

**APIs que podem ser adicionadas:**
- **LinkedIn API** - Experiências profissionais
- **Dev.to API** - Artigos técnicos
- **OpenWeather API** - Widget de clima
- **Unsplash API** - Imagens dinâmicas
- **Spotify API** - Música atual

---

**Desenvolvido com:** JavaScript ES6+, Fetch API, Async/Await, Bootstrap 5