# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.

Navegador usado: (escribe aqui cual usaste)

## Ejercicio 2: Seleccionar y modificar el DOM

| Instrucción | Qué cambió en la pantalla | Se mantiene al recargar (Sí/No) |
|---|---|---|
| `textContent` desde la consola | Cambió el texto del título | No |
| `textContent` desde `app.js` | El título muestra "Hola TECSUP" | Sí |
| `style.color` | El título cambió a color azul | Sí |
| `classList.add` | El párrafo obtuvo el fondo amarillo | Sí |
| `createElement + appendChild` | Se agregó "JavaScript" a la lista | Sí |

## Ejercicio 3: Evento click

| Tipo de evento | Qué acción lo dispara | Cuánto suma por acción |
|---|---|---|
| `click` | Un clic sobre el botón | 1 |
| `dblclick` | Un doble clic sobre el botón | 1 |
| `mouseover` | Pasar el mouse sobre el botón | 1 |

## Ejercicio 4: Eventos input y submit

| Prueba | Qué pasó en la pantalla | Se recargó la página (Sí/No) |
|---|---|---|
| Escribir en el campo nombre | Apareció “Hola, ” seguido del nombre mientras se escribía | No |
| Enviar sin `preventDefault` | El mensaje “Enviado” apareció por un instante y desapareció al recargar | Sí |
| Enviar con `preventDefault`, correo sin @ | Apareció “Correo no valido: falta @” en rojo | No |
| Enviar con `preventDefault`, correo con @ | Apareció “Enviado: correo” y permaneció en pantalla | No |

## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | `descripcion()` | `conDescuento(0.25)` |
|---|---|---:|---|---:|
| laptop | Laptop | 2500 | Laptop - S/ 2500.00 | 1875 |
| mouse | Mouse | 45 | Mouse - S/ 45.00 | 33.75 |
| teclado | Teclado | 120 | Teclado - S/ 120.00 | 90 |
| monitor | Monitor | 680 | Monitor - S/ 680.00 | 510 |

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba | Total que muestra la página | Correcto (Sí/No) |
|---|---:|:---:|
| Cuaderno 12.50 | 12.50 | Sí |
| + Lapicero 3.20 | 15.70 | Sí |
| + Mochila 89.90 | 105.60 | Sí |
| Sin Number() | Error | Sí |


| Pieza | Línea de tu código donde aparece | Para qué sirve |
|---|---|---|
| DOM | `document.querySelector("#formProducto")` | Permite seleccionar elementos del HTML para trabajar con ellos desde JavaScript. |
| Evento | `formProducto.addEventListener("submit", (evento) => {` | Detecta cuando se envía el formulario y ejecuta el código. |
| Objeto | `const producto = new Producto(prodNombre.value, Number(prodPrecio.value));` | Crea un nuevo objeto Producto usando los datos ingresados. |