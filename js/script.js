document.addEventListener('DOMContentLoaded', function() {
    const inputCadastrar = document.querySelector('input');
    const botaoCadastrar = document.querySelector('button');
    const elementoUl = document.querySelector('ul');

    // Limpa o campo após adicionar o item
    function limparInputCadastrar(inputCadastrar) {
        inputCadastrar.value = '';
    }

    // Injetando li na ul
    function injetarElementoNoHTML(elementoPai, novoElemento) {
        elementoPai.appendChild(novoElemento);
    }

    function criarElemento(tagName, texto) {
        const elemento = document.createElement(tagName);
        if (texto) {
            elemento.textContent = texto;
        }
        return elemento;
    }

    botaoCadastrar.onclick = function() {
        // Verificando o valor do input
        if (inputCadastrar.value.length <= 0) {
            inputCadastrar.classList.add('borda-vermelha');
            return;
        }

        // Criar uma li
        const novaLi = criarElemento('li');

        // Criei o botão de excluir
        const botaoExcluir = criarElemento('button', 'Excluir');

        botaoExcluir.onclick = function() {
            novaLi.remove();
        }

        const elementoSpan = criarElemento("span", inputCadastrar.value);

        // Injetando na nova li elementoSpan e botaoExcluir
        injetarElementoNoHTML(novaLi, elementoSpan);
        injetarElementoNoHTML(novaLi, botaoExcluir);

        // Criando o evento de click para li
        novaLi.onclick = function (event) {
            const elemento = event.target;
            if (elemento.nodeName === 'LI') {
                elemento.classList.toggle('comprado');
            } else {
                elemento.parentElement.classList.toggle('comprado');
            }
        };

        injetarElementoNoHTML(elementoUl, novaLi);
        limparInputCadastrar(inputCadastrar);
    };
});
