# Tarea: Mi componente interactivo

## Componente elegido

Lista de tareas.

## Version 1: solo DOM

En esta primera versión se creó una lista de tareas usando solamente el DOM. Se seleccionaron elementos del HTML con `querySelector` y se crearon tres elementos `li` con `createElement`. Después se agregaron a la lista usando `appendChild`.

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
```

## Version 2: con eventos

En esta segunda versión se agregaron eventos para que la lista de tareas sea interactiva. Se agregó un formulario para registrar tareas, un evento `input` para mostrar un mensaje mientras se escribe y un evento `submit` para agregar la tarea.

También se agregaron botones con eventos `click` para completar o borrar una tarea. Cuando se presiona **Completar**, la tarea se muestra tachada. Cuando se presiona **Borrar**, el elemento se elimina de la página.

La validación evita registrar una tarea vacía y muestra el mensaje directamente en la página. Con estos cambios la aplicación pasó de mostrar una lista fija a permitir interacción con el usuario.

```js
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
```

## Version 3: con clases y objetos

En esta tercera versión se creó una clase llamada `Tarea`. La clase tiene los atributos `texto` y `completada`.

El atributo `texto` guarda el nombre de la tarea y el atributo `completada` indica si la tarea ya fue terminada.

También se crearon dos métodos. El método `completar()` cambia el estado de la tarea a completada y el método `estaPendiente()` permite comprobar si la tarea todavía está pendiente.

Cada vez que el usuario agrega una tarea se crea un nuevo objeto usando `new Tarea()`.

```js
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
```

## Donde uso DOM, eventos y objetos

| Parte | Código utilizado | Uso |
|---|---|---|
| DOM | `document.querySelector()` | Seleccionar elementos de la página |
| DOM | `document.createElement()` | Crear elementos nuevos |
| DOM | `appendChild()` | Agregar elementos a la lista |
| DOM | `li.remove()` | Eliminar una tarea |
| Eventos | `addEventListener("input")` | Detectar cuando el usuario escribe |
| Eventos | `addEventListener("submit")` | Detectar cuando se envía el formulario |
| Eventos | `addEventListener("click")` | Detectar los botones de completar y borrar |
| Objetos | `class Tarea` | Crear la estructura de cada tarea |
| Objetos | `new Tarea()` | Crear nuevos objetos tarea |
| Métodos | `tarea.completar()` | Cambiar una tarea a completada |
| Métodos | `tarea.estaPendiente()` | Comprobar si una tarea sigue pendiente |

## Pruebas realizadas

| Acción realizada | Resultado esperado | Resultado obtenido | Cumple |
|---|---|---|---|
| Escribir una tarea | Mostrar el mensaje "Tarea lista para agregar" | Se mostró el mensaje | Sí |
| Agregar una tarea | La tarea debe aparecer en la lista | La tarea apareció correctamente | Sí |
| Completar una tarea | La tarea debe aparecer tachada | La tarea quedó tachada | Sí |
| Borrar una tarea | La tarea debe desaparecer | La tarea se eliminó de la lista | Sí |
| Enviar una tarea vacía | Mostrar mensaje de validación | Se mostró "La tarea no puede estar vacía" | Sí |
| Agregar varias tareas | Las tareas deben aparecer individualmente | Se agregaron correctamente | Sí |

## Por que disene asi mi clase

Diseñé la clase `Tarea` con los atributos `texto` y `completada` porque cada objeto necesita guardar el contenido de la tarea y saber si ya fue completada.

El método `completar()` cambia el estado de la tarea y el método `estaPendiente()` permite comprobar si todavía está pendiente.

De esta manera cada tarea tiene sus propios datos y comportamientos. Esto permite que el código esté más ordenado y que cada tarea pueda ser controlada de manera independiente.