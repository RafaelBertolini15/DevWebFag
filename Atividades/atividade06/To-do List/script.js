function cadastrarTarefa(e) {
    e.preventDefault();
    const form = e.target.elements;
    const tarefa = form[1].value;

    const li = document.createElement("li");
    const msg = tarefa;
    li.innerText = msg;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    li.appendChild(checkbox);

    const ul = document.querySelector(".lista");
    ul.appendChild(li);

    e.target.elements.tarefa.value = "";
}

const lista = document.querySelector(".lista");

lista.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});