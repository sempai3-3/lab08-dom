# Tarea: Mi componente interactivo

## Componente elegido

Lista de tareas.

## Version 1: solo DOM

En esta primera versión se creó una lista de tareas usando solamente el DOM. Se seleccionaron elementos del HTML con querySelector y se crearon tres elementos li con createElement. Después se agregaron a la lista usando appendChild.

La página inicialmente muestra tres tareas y un mensaje indicando la cantidad de tareas pendientes. En esta versión todavía no se utilizaron eventos ni clases.

```js
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

## Version 2: con eventos

## Version 3: con clases y objetos

## Donde uso DOM, eventos y objetos

## Pruebas realizadas

## Por que disene asi mi clase

### Después

Guarda `TAREA.md` con **Ctrl + S**.

Si ya comprobaste que `tarea/index.html` muestra:

- Mi lista de tareas
- Estudiar JavaScript
- Practicar DOM
- Realizar la tarea
- Tareas pendientes: 3

entonces ya podemos hacer el **primer commit de la V1**:

```powershell
git add .