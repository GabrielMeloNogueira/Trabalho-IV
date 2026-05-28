const inputTarefa = document.getElementById("input-tarefa");
const btnAdicionar = document.getElementById("btn-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");
const mensagem = document.getElementById("mensagem");

function adicionarTarefa() {
  const texto = inputTarefa.value.trim();

  if (texto === "") {
    mensagem.textContent = "Digite uma tarefa antes de adicionar.";
    return;
  }

  mensagem.textContent = "";

  const item = document.createElement("li");
  item.textContent = texto;

  listaTarefas.appendChild(item);
  inputTarefa.value = "";
}

btnAdicionar.addEventListener("click", adicionarTarefa);