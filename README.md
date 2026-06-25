# Mapa de Vida - Alexandre

Site pessoal para rastrear comportamento, metas e evolução como prestador de serviço excelente.

## Estrutura do Site

O site está organizado em 6 seções principais:

1. **O Padrão Inegociável** - Código de conduta profissional
   - Precisão e Qualidade
   - Gestão de Expectativas e Prazos
   - Comunicação Proativa
   - Filtro de Decisão

2. **Código Doméstico** - Convivência harmoniosa
   - Organização Pessoal
   - Respeito ao Espaço Comum
   - Contribuição Ativa
   - Comunicação Respeitosa

3. **Gestão de Foco** - Protocolos para mente acelerada
   - Protocolo de Objetos
   - Gestão de Abas e Janelas
   - Pausas Estratégicas
   - Ancoragem de Atenção

4. **Academia dos Focados** - Treinos mentais
   - Escaneamento Visual
   - Foco em Um Ponto
   - Sequência Lógica
   - Filtramento de Ruído

5. **Afiando o Machado** - Evolução técnica
   - Aprofundamento Técnico
   - Repositório de Soluções
   - Metas de Estudo

6. **Vitrine de Autoridade** - Posicionamento
   - Documentação do Processo
   - Filtro de Clientes
   - Critérios de Cliente Ideal

7. **A Fortaleza Pessoal** - Sustentação
   - Consistência Física
   - Preservação de Energia
   - Rotina Diária

## Instalação

```bash
cd mapa-vida
npm install
```

## Executar em Desenvolvimento

```bash
npm run dev
```

O site estará disponível em http://localhost:5173

## Build para Produção

```bash
npm run build
```

## Deploy no GitHub Pages

1. Configure o repositório no GitHub: `https://github.com/alexsndev/alemapa-2026.git`
2. Faça o build: `npm run build`
3. Configure o GitHub Pages para publicar a pasta `dist` da branch `main`
4. O site estará disponível em: `https://alexsndev.github.io/`

## PWA (Progressive Web App)

O site é configurado como PWA e pode ser instalado como aplicativo:
- Header oculto quando instalado como app
- Ícones para instalação (adicione `icon-192.png` e `icon-512.png` na pasta `public`)
- Manifest configurado para instalação

**IMPORTANTE:** Adicione os ícones `icon-192.png` e `icon-512.png` na pasta `public/` antes do deploy.

## Tecnologias

- React 18
- Vite
- TailwindCSS
- Lucide Icons
- PWA (Progressive Web App)
