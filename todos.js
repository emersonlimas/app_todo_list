var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';
    for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        //Adicionar botão de excluir To-do
        var linkElementDelete = document.createElement('a');
        linkElementDelete.setAttribute('href', '#');
        //Verificar posição do To-Do para exclusão
        var pos = todos.indexOf(todo);
        linkElementDelete.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        var linkTextDelete = document.createTextNode('Excluir');
        linkElementDelete.appendChild(linkTextDelete);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElementDelete);
        listElement.appendChild(todoElement);
    }
}

renderTodos();
//Adicionar To-Do
function addTodo() {
    var todoText = inputElement.value;
    if (todoText != '') {
        todos.push(todoText);
        inputElement.value = '';
        renderTodos();
        saveToStorage();
    } else {
        alert('Um To do vazio não pode ser adicionado!');
    }
    
}

buttonElement.onclick = addTodo;
//Excluir To-Do
function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

//Editar To-do


//Salvar no Storage
function saveToStorage() {

    localStorage.setItem('list_todos', JSON.stringify(todos));
}
