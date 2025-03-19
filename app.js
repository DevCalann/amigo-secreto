//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os amigos
let amigos = [];

function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const nomeInput = document.getElementById('nomeInput');
    const nome = nomeInput.value.trim(); // Remove espaços em branco antes e depois do nome

    // Validação para garantir que o campo não esteja vazio
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return; // Interrompe a função caso o nome esteja vazio
    }

    // Verifica se o nome já foi adicionado
    if (amigos.includes(nome)) {
        alert('Este amigo já foi adicionado.');
        nomeInput.value = '';  // Limpa o campo de entrada se o nome já estiver na lista
        return; // Interrompe a função caso o nome já exista
    }

    // Atualiza o array de amigos se o nome for válido
    amigos.push(nome);

    // Limpa o campo de entrada
    nomeInput.value = '';

    // Atualiza a lista de amigos na interface
    atualizarLista();
}

function atualizarLista() {
    // Obter o elemento da lista onde os amigos serão exibidos
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpar a lista existente (evitar duplicados)
    listaAmigos.innerHTML = '';

    // Percorrer o array de amigos e adicionar cada nome à lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li'); // Criar um novo item de lista
        li.textContent = amigos[i]; // Atribuir o nome do amigo ao item da lista
        listaAmigos.appendChild(li); // Adicionar o item de lista à lista exibida na tela
    }
}

function sortearAmigo() {
    // Validar se há amigos disponíveis no array
    if (amigos.length === 0) {
        alert('Por favor, adicione pelo menos um amigo para realizar o sorteio.');
        return; // Interrompe a função caso não haja amigos
    }

    // Gerar um índice aleatório entre 0 e o comprimento do array - 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado usando o índice aleatório
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado na tela
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<h2>Amigo Secreto Sorteado: ${amigoSorteado}</h2>`;
}
