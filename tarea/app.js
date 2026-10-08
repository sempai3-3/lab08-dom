// Version 3: con clases y objetos

class Tarea {
    constructor(texto) {
        this.texto = texto;
        this.completada = false;
    }

    completar() {
        this.completada = true;
    }

    estaPendiente() {
        return !this.completada;
    }
}

const formularioTarea = document.querySelector("#formularioTarea");
const entradaTarea = document.querySelector("#entradaTarea");
const listaTareas = document.querySelector("#listaTareas");
const mensaje = document.querySelector("#mensaje");

let tareas = [];

entradaTarea.addEventListener("input", () => {
    if (entradaTarea.value.trim() === "") {
        mensaje.textContent = "Escribe una tarea";
    } else {
        mensaje.textContent = "Tarea lista para agregar";
    }
});

formularioTarea.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (entradaTarea.value.trim() === "") {
        mensaje.textContent = "La tarea no puede estar vacía";
        return;
    }

    const tarea = new Tarea(entradaTarea.value);
    tareas.push(tarea);

    const li = document.createElement("li");
    li.textContent = tarea.texto + " ";

    const botonCompletar = document.createElement("button");
    botonCompletar.textContent = "Completar";

    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Borrar";

    botonCompletar.addEventListener("click", () => {
        tarea.completar();

        if (!tarea.estaPendiente()) {
            li.style.textDecoration = "line-through";
            mensaje.textContent = "Tarea completada";
        }
    });

    botonBorrar.addEventListener("click", () => {
        const posicion = tareas.indexOf(tarea);

        if (posicion !== -1) {
            tareas.splice(posicion, 1);
        }

        li.remove();

        mensaje.textContent =
            "Tareas pendientes: " +
            tareas.filter((t) => t.estaPendiente()).length;
    });

    li.appendChild(botonCompletar);
    li.appendChild(botonBorrar);

    listaTareas.appendChild(li);

    mensaje.textContent =
        "Tareas pendientes: " +
        tareas.filter((t) => t.estaPendiente()).length;

    entradaTarea.value = "";
});
