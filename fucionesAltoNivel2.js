tareas=[
    {"nombre":"T1",
    "duracion":1
    },
    {"nombre":"T2",
    "duracion":2
    },
    {"nombre":"T3",
    "duracion":3
    }
];
/* forEach
tareas.forEach(element => {
    console.log(element.nombre);
});
*/
/* filter
console.log(tareas.filter(data=>data.duracion>=2));
 */

 /* map es diferente de Map, el Map es como el de java.
 let listadoTareas=tareas.map(data=>data.nombre);
 console.log(listadoTareas);
 */

/** Diferencia map y filter, map me puede traer solo la propiedad del objeto a la cual estoy apuntando,
 *  filter me trae TODO el objeto completo que cumpla con el filtro 
 **/

 /* findIndex
console.log(tareas.findIndex(data=>data.duracion>2));
*/
//Reduce, combina todos los elementos en 1.,SIEMPRE debo enviarle el anterior y siguiente (a,b)
/*console.log(tareas.map(data=>data.duracion).reduce((a,b)=>a+b));*/

//Ejemplo 2 Reduce, devuelve  → [1, 2, 3, 4, 5, 6]
/*
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((a,b)=>a.concat(b)));
*/

