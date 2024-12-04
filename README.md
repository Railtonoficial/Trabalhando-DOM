# Lista de Compras

Este projeto é uma aplicação simples de Lista de Compras desenvolvida utilizando HTML, CSS e JavaScript. O objetivo principal foi manipular o DOM (Document Object Model) para criar, excluir e gerenciar elementos dinamicamente, proporcionando uma experiência interativa ao usuário.

**[Clique aqui para visitar o site do projeto](https://railtonoficial.github.io/Trabalhando-DOM/)**

## Funcionalidades

- Adicionar itens à lista de compras.
- Excluir itens da lista.
- Marcar itens como "comprados" (com alteração visual).
- Validação do campo de entrada para evitar adições vazias.
- Estilização responsiva e amigável.

## Estrutura do Projeto

### HTML
O arquivo HTML fornece a estrutura da aplicação, incluindo:
- Um campo de entrada (`input`) para adicionar novos itens.
- Um botão de cadastro.
- Um elemento `ul` para listar os itens.

### CSS
O arquivo CSS é responsável pela estilização do projeto:
- Design minimalista e limpo.
- Botões e itens com cores e estilos interativos.
- Classes para realçar a interação do usuário (`.borda-vermelha`, `.comprado`).
- Uso da fonte `Roboto` via Google Fonts.

### JavaScript
O arquivo JavaScript manipula o DOM para:
- Adicionar itens dinamicamente na lista ao clicar no botão de cadastro.
- Validar o campo de entrada, exibindo uma borda vermelha se estiver vazio.
- Adicionar funcionalidade de exclusão para cada item.
- Permitir marcar/desmarcar itens como comprados ao clicar no mesmo.

## Detalhes de Implementação

1. **Manipulação de Eventos**:
   - Uso do `DOMContentLoaded` para garantir que o script só seja executado após o carregamento completo do DOM.
   - Eventos de `onclick` para os botões e elementos da lista.

2. **Criação de Elementos Dinâmicos**:
   - Uso de funções como `createElement` e `appendChild` para gerar novos elementos e adicionar ao DOM.

3. **Validação**:
   - Verificação de entradas vazias antes de adicionar um item.

4. **Estilização Dinâmica**:
   - Alteração da classe CSS dos elementos ao serem marcados como comprados.

## Como Usar

1. Clone o repositório ou copie os arquivos.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Digite o nome de um item no campo de entrada e clique no botão "Cadastro".
4. Clique em um item para marcá-lo como "comprado" ou no botão "Excluir" para removê-lo da lista.

## Tecnologias Utilizadas

- **HTML5**: Estrutura do documento.
- **CSS3**: Estilização e layout.
- **JavaScript**: Manipulação do DOM e lógica de interação.

Este projeto foi desenvolvido para praticar e demonstrar habilidades com a manipulação do DOM e estilização responsiva.
