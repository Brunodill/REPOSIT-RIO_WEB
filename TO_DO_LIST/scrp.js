// Função para adicionar uma nova tarefa à lista
function adicionarTarefa() {
    // Obtém o texto digitado no campo de entrada e remove espaços em branco
    const texto = document.getElementById('inputAdd').value.trim();
    // Obtém a referência à lista onde as tarefas serão adicionadas
    const list = document.getElementById('list');

    // Verifica se o campo de entrada não está vazio
    if (texto) {
        // Chama a função para obter a cor com base na prioridade selecionada
        const cor = obterPrioridade();

        // Cria um novo elemento de lista (li) para a nova tarefa
        const item = document.createElement('li');
        // Aplica a cor ao fundo do item da lista
        item.style.backgroundColor = cor; 
        // Define o conteúdo HTML do item, incluindo o texto da tarefa e botões
        item.innerHTML = `
            <span>${texto}</span>
            <div class="task-buttons">
                <button class="edit-button">Editar</button>
                <button class="confirm-button">Concluir</button>
                <button class="cancel-button">Cancelar</button>
            </div>
        `;
        
        // Adiciona o novo item à lista de tarefas
        list.appendChild(item);
        // Limpa o campo de entrada para que o usuário possa digitar uma nova tarefa
        document.getElementById('inputAdd').value = ''; 
        // Chama a função para limpar os checkboxes de prioridade
        limparPrioridade(); 
    }
}

// Função para obter a cor com base na prioridade selecionada
function obterPrioridade() {
    // Verifica se o checkbox "Importante" está selecionado e retorna a cor correspondente
    if (document.getElementById('vermelho').checked) {
        return '#f15b5b'; // Vermelho
    } 
    // Verifica se o checkbox "Baixa Importância" está selecionado
    if (document.getElementById('amarelo').checked) {
        return '#f3df6e'; // Amarelo
    } 
    // Verifica se o checkbox "Não Importante" está selecionado
    if (document.getElementById('verde').checked) {
        return '#72e464'; // Verde
    }
    // Se nenhum checkbox estiver selecionado, retorna a cor verde padrão
    return '#28a745'; 
}

// Função para limpar os checkboxes de prioridade
function limparPrioridade() {
    // Desmarca o checkbox "Importante"
    document.getElementById('vermelho').checked = false;
    // Desmarca o checkbox "Baixa Importância"
    document.getElementById('amarelo').checked = false;
    // Desmarca o checkbox "Não Importante"
    document.getElementById('verde').checked = false;
}

// Função para manipular ações nas tarefas (editar, concluir, cancelar)
function manipularTarefa(event) {
    // Obtém o item de lista (li) mais próximo do alvo do evento
    const item = event.target.closest('li');
    // Se não houver item, sai da função
    if (!item) return; 

    // Se o botão "Editar" for clicado
    if (event.target.classList.contains('edit-button')) {
        // Exibe um prompt para o usuário editar a tarefa e armazena o novo texto
        const novoTexto = prompt('Editar tarefa:', item.querySelector('span').textContent);
        // Se o usuário inserir um novo texto, atualiza o conteúdo da tarefa
        if (novoTexto) {
            item.querySelector('span').textContent = novoTexto; 
        }
    }

    // Se o botão "Concluir" for clicado
    if (event.target.classList.contains('confirm-button')) {
        // Risca a tarefa indicando que foi concluída
        item.style.textDecoration = 'line-through'; 
        // Muda a cor de fundo do item para indicar que foi concluído
        item.style.backgroundColor = '#e9ecef'; 
    }

    // Se o botão "Cancelar" for clicado
    if (event.target.classList.contains('cancel-button')) {
        // Remove o item da lista
        item.remove(); 
    }
}

// Adiciona um listener de evento ao botão "Adicionar" para chamar a função de adicionar tarefa
document.getElementById('btnAdd').addEventListener('click', adicionarTarefa);
// Adiciona um listener de evento à lista para manipular ações nas tarefas
document.getElementById('list').addEventListener('click', manipularTarefa);