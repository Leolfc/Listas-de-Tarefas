let botao = document.querySelector("button");

function adicionarTarefa() {
  let valorDoInput = document.querySelector("input").value;
  let li = document.createElement("li");
  li.innerHTML = valorDoInput + '<span onclick="deletarTarefa(this)">❌</span>';
  document.querySelector("#tarefas__listas").appendChild(li);

  valorDoInput = "";
}

function deletarTarefa(li) {
  li.parentElement.remove();
}

botao.onclick = adicionarTarefa;
