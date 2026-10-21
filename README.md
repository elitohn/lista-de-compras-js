<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=175&color=0:0F172A,55:164E63,100:0891B2&text=Lista%20de%20Compras&fontColor=FFFFFF&fontSize=34&fontAlignY=38&desc=Organiza%C3%A7%C3%A3o%20de%20compras%20com%20JavaScript&descAlignY=61&descSize=15" alt="Capa do projeto Lista de Compras" width="100%" />

![Tecnologia](https://img.shields.io/badge/HTML%2C%20CSS%20e%20JavaScript-0F172A?style=flat-square) ![Idioma](https://img.shields.io/badge/documentação-pt--BR-0891B2?style=flat-square) ![Tipo](https://img.shields.io/badge/projeto-de%20estudo-334155?style=flat-square)

</div>

# Lista de Compras

Aplicação web simples para adicionar itens a uma lista e acompanhar o que já foi comprado. O projeto foi desenvolvido para praticar JavaScript, manipulação do DOM e organização do código em módulos.

## Funcionalidades

- Adicionar um item à lista;
- Exibir o dia da semana, a data e o horário em que o item foi criado;
- Marcar um item como comprado, aplicando um risco sobre o nome;
- Exibir uma mensagem quando a lista está vazia;
- Avisar quando o campo é enviado sem texto.

## Demonstração

A interface é construída no navegador com HTML, CSS e JavaScript. Para executar os módulos JavaScript localmente, inicie um servidor HTTP conforme as instruções abaixo.

## Tecnologias

- HTML5;
- CSS3;
- JavaScript com módulos ES;
- Google Fonts para as fontes da interface.

## Como executar

Não há dependências de Node.js ou etapa de build. É necessário ter Python 3 instalado para iniciar um servidor local.

1. Clone o repositório e acesse a pasta:

   ```bash
   git clone https://github.com/elitohn/lista-de-compras-js.git
   cd lista-de-compras-js
   ```

2. Inicie um servidor local na pasta do projeto:

   ```bash
   python -m http.server 8000
   ```

   No Windows, também é possível usar:

   ```powershell
   py -m http.server 8000
   ```

3. Abra [http://localhost:8000](http://localhost:8000) no navegador.

Para encerrar o servidor, pressione `Ctrl+C` no terminal.

## Estrutura

```text
.
├── img/
│   ├── bag.png
│   ├── delete.svg
│   └── edit.svg
├── scripts/
│   ├── criarItemDaLista.js
│   ├── gerarDiaDaSemana.js
│   └── verificarListaVazia.js
├── index.html
├── index.js
└── styles.css
```

## Limitações atuais

Os itens existem apenas na página aberta: ao recarregar o navegador, a lista é apagada. O código atual permite adicionar e marcar itens como comprados; edição, exclusão e persistência ainda não estão implementadas.

Desenvolvido por **Wellyton Huan** como projeto de estudo.
