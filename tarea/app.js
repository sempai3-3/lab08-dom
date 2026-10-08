// Version 1: solo DOM

const listaTareas = document.querySelector("#listaTareas");
const mensaje = document.querySelector("#mensaje");

const tarea1 = document.createElement("li");
tarea1.textContent = "Estudiar JavaScript";

const tarea2 = document.createElement("li");
tarea2.textContent = "Practicar DOM";

const tarea3 = document.createElement("li");
tarea3.textContent = "Realizar la tarea";

listaTareas.appendChild(tarea1);
listaTareas.appendChild(tarea2);
listaTareas.appendChild(tarea3);

mensaje.textContent = "Tareas pendientes: 3";

