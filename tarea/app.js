// Version 2: con eventos

const formularioTarea = document.querySelector("#formularioTarea");
const entradaTarea = document.querySelector("#entradaTarea");
const listaTareas = document.querySelector("#listaTareas");
const mensaje = document.querySelector("#mensaje");

let cantidadTareas = 0;

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

    const li = document.createElement("li");
    li.textContent = entradaTarea.value;

    const botonCompletar = document.createElement("button");
    botonCompletar.textContent = "Completar";

    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Borrar";

    botonCompletar.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
    });

    botonBorrar.addEventListener("click", () => {
        li.remove();
        cantidadTareas = cantidadTareas - 1;
        mensaje.textContent = "Tareas pendientes: " + cantidadTareas;
    });

    li.appendChild(botonCompletar);
    li.appendChild(botonBorrar);
    listaTareas.appendChild(li);

    cantidadTareas = cantidadTareas + 1;
    mensaje.textContent = "Tareas pendientes: " + cantidadTareas;

    entradaTarea.value = "";
});